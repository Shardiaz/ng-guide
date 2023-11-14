import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { CollectionsService } from './collections.service';

export const CollectionRoutes: Routes = [
  {
    path: 'overview',
    loadComponent: () => import('./overview/overview.component'),
  },
  {
    path: ':id',
    title: (activatedRoute) =>
      inject(CollectionsService).resolveName(activatedRoute.paramMap.get('id')),
    loadComponent: () => import('./edit/edit.component'),
  },
  {
    path: '**',
    redirectTo: 'overview',
  },
];
