import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { CollectionService } from '@slides/api';

export const Routes = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
  },
  {
    path: 'model/:id',
    title: (a) =>
      inject(CollectionService)
        .GetSingle(a.paramMap.get('id') || '')
        .then((item) => item?.name || 'New Model'),
    loadComponent: () => import('./edit-model/edit-model.component'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
] satisfies Route[];
