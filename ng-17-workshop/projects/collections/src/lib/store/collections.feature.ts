import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Collection } from '@score/api';
import { CollectionsAPIActions } from './collections.actions';

export type CollectionState = {
  collections: Collection[];
  loading: string[];
  error: Error | null;
  collection: Collection | null;
};

export const initialState: CollectionState = {
  collections: [],
  loading: [],
  error: null,
  collection: null,
};

export const collectionsFeature = createFeature({
  name: 'collections',
  reducer: createReducer(
    initialState,
    on(CollectionsAPIActions.loadSuccess, (state, { collections }) => ({
      ...state,
      loading: popLoading(state, CollectionsAPIActions.load),
      collections,
    })),
    on(CollectionsAPIActions.addSuccess, (state, action) => ({
      ...state,
      loading: popLoading(state, CollectionsAPIActions.add),
      collections: [action.collection, ...state.collections],
    })),
    on(CollectionsAPIActions.updateSuccess, (state, action) => ({
      ...state,
      loading: popLoading(state, CollectionsAPIActions.update),
      collections: state.collections.map((c) =>
        c.id === action.collection.id ? action.collection : c
      ),
    })),
    on(CollectionsAPIActions.deleteSuccess, (state, { id }) => ({
      ...state,
      loading: popLoading(state, CollectionsAPIActions.delete),
      collections: state.collections.filter((c) => c.id !== id),
    })),
    on(CollectionsAPIActions.getSuccess, (state, { collection }) => ({
      ...state,
      loading: popLoading(state, CollectionsAPIActions.get),
      collection,
    })),
    on(CollectionsAPIActions.add, (state) => ({
      ...state,
      error: null,
      loading: pushLoading(state, CollectionsAPIActions.add),
    })),
    on(CollectionsAPIActions.update, (state) => ({
      ...state,
      error: null,
      loading: pushLoading(state, CollectionsAPIActions.update),
    })),
    on(CollectionsAPIActions.delete, (state) => ({
      ...state,
      error: null,
      loading: pushLoading(state, CollectionsAPIActions.delete),
    })),
    on(CollectionsAPIActions.load, (state) => ({
      ...state,
      error: null,
      loading: pushLoading(state, CollectionsAPIActions.load),
    })),
    on(CollectionsAPIActions.get, (state) => ({
      ...state,
      collection: null,
      error: null,
      loading: pushLoading(state, CollectionsAPIActions.get),
    })),
    on(CollectionsAPIActions.addError, (state, { error }) => ({
      ...state,
      error,
      loading: popLoading(state, CollectionsAPIActions.add),
    })),
    on(CollectionsAPIActions.updateError, (state, { error }) => ({
      ...state,
      error,
      loading: popLoading(state, CollectionsAPIActions.update),
    })),
    on(CollectionsAPIActions.deleteError, (state, { error }) => ({
      ...state,
      error,
      loading: popLoading(state, CollectionsAPIActions.delete),
    })),
    on(CollectionsAPIActions.loadError, (state, { error }) => ({
      ...state,
      error,
      loading: popLoading(state, CollectionsAPIActions.load),
    })),
    on(CollectionsAPIActions.getError, (state, { error }) => ({
      ...state,
      error,
      loading: popLoading(state, CollectionsAPIActions.get),
    }))
  ),
  extraSelectors: ({ selectLoading }) => ({
    selectIsLoading: createSelector(
      selectLoading,
      (loading) => !!loading.length
    ),
  }),
});

function pushLoading(state: CollectionState, action: TypedAction<string>) {
  return [action.type, ...state.loading];
}
function popLoading(state: CollectionState, action: TypedAction<string>) {
  return state.loading.filter((load) => load !== action.type);
}
