import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { CollectionService, RatingService } from '@slides/api';
import { RatingsService } from './ratings.service';

const canActivateCollectionId = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('collectionId');
  if (id == '-') return true;
  return inject(CollectionService).exists(id);
};

const canActivateRatingId = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id');
  if (id == '-') return true;
  return inject(RatingService).exists(id);
};

export const RatingRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
  },
  {
    path: ':collectionId',
    title: (activatedRoute) =>
      inject(RatingsService).resolveCollectionName(
        activatedRoute.paramMap.get('collectionId')
      ),
    canActivate: [canActivateCollectionId],
    children: [
      {
        path: '',
        loadComponent: () => import('./ratings/ratings.component'),
      },
      {
        path: ':id',
        title: (activatedRoute) =>
          inject(RatingsService).resolveRatingName(
            activatedRoute.paramMap.get('id')
          ),
        canActivate: [canActivateRatingId],
        loadComponent: () => import('./edit/edit.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
