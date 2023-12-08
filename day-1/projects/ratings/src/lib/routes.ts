import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { RatingsService } from './ratings.service';

export const RatingRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: ':collectionId',
    children: [
      {
        path: '',
        title: (route: ActivatedRouteSnapshot) =>
          inject(RatingsService).resolveCollectionName(
            route.paramMap.get('collectionId')
          ),
        loadComponent: () =>
          import('./ratings/ratings.component').then((m) => m.RatingsComponent),
      },
      {
        path: ':id',
        title: (route: ActivatedRouteSnapshot) =>
          inject(RatingsService).resolveRatingName(route.paramMap.get('id')),
        loadComponent: () =>
          import('./edit/edit.component').then((m) => m.EditComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
