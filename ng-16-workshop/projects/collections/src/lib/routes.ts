import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CollectionsService } from './collections.service';
import * as CollectionEffects from './store/collections.effects';
import { collectionsFeature } from './store/collections.feature';

export const CollectionRoutes: Routes = [
  {
    path: '',
    providers: [
      provideState(collectionsFeature),
      provideEffects(CollectionEffects),
    ],
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./overview/overview.component'),
      },
      {
        path: ':id',
        title: (activatedRoute) =>
          inject(CollectionsService).resolveName(
            activatedRoute.paramMap.get('id')
          ),
        loadComponent: () => import('./edit/edit.component'),
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
];
