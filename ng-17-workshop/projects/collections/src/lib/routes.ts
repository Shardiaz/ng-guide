import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { CollectionService } from '@score/api';
import { map } from 'rxjs';

export const CollectionRoutes: Routes = [
  {
    title: 'Collections',
    path: '',
    loadComponent: () => import('./overview/overview.component'),
  },
  {
    path: 'model/:id',
    title: (activatedRoute) =>
      inject(CollectionService)
        .get(activatedRoute.paramMap.get('id') || '')
        .pipe(map((item) => item?.name || 'New Model')),
    loadComponent: () => import('./edit/edit.component'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
