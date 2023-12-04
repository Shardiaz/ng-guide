import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CollectionService } from '@score/api';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CollectionsAPIActions } from './collections.actions';

export const loadCollections = createEffect(
  (
    actions$ = inject(Actions),
    collectionService = inject(CollectionService)
  ) => {
    return actions$.pipe(
      ofType(CollectionsAPIActions.load),
      exhaustMap(() =>
        collectionService.getAll().pipe(
          map((collections) =>
            CollectionsAPIActions.loadSuccess({ collections })
          ),
          catchError((error) => of(CollectionsAPIActions.loadError({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const createCollection = createEffect(
  (
    actions$ = inject(Actions),
    collectionService = inject(CollectionService)
  ) => {
    return actions$.pipe(
      ofType(CollectionsAPIActions.add),
      exhaustMap((action) =>
        collectionService.add(action.collection).pipe(
          map((collection) => CollectionsAPIActions.addSuccess({ collection })),
          catchError((error) => of(CollectionsAPIActions.addError({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const updateCollection = createEffect(
  (
    actions$ = inject(Actions),
    collectionService = inject(CollectionService)
  ) => {
    return actions$.pipe(
      ofType(CollectionsAPIActions.update),
      exhaustMap((action) =>
        collectionService.update(action.collection).pipe(
          map((collection) =>
            CollectionsAPIActions.updateSuccess({ collection })
          ),
          catchError((error) =>
            of(CollectionsAPIActions.updateError({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const deleteCollection = createEffect(
  (
    actions$ = inject(Actions),
    collectionService = inject(CollectionService)
  ) => {
    return actions$.pipe(
      ofType(CollectionsAPIActions.delete),
      exhaustMap((action) =>
        collectionService.delete(action.id!).pipe(
          map(() => CollectionsAPIActions.deleteSuccess({ id: action.id })),
          catchError((error) =>
            of(CollectionsAPIActions.deleteError({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const getCollection = createEffect(
  (
    actions$ = inject(Actions),
    collectionService = inject(CollectionService)
  ) => {
    return actions$.pipe(
      ofType(CollectionsAPIActions.get),
      exhaustMap((action) =>
        action.id === '-'
          ? of(CollectionsAPIActions.getSuccess({ collection: { name: '' } }))
          : collectionService.get(action.id!).pipe(
              map((collection) =>
                CollectionsAPIActions.getSuccess({ collection })
              ),
              catchError((error) =>
                of(CollectionsAPIActions.getError({ error }))
              )
            )
      )
    );
  },
  { functional: true }
);
