import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { CollectionService, RatingService } from '@score/api';
import { RatingsService } from './ratings.service';

const canActivateCollectionId = (route: ActivatedRouteSnapshot) => {
  inject(CollectionService).exists(route.paramMap.get('collectionId'));
};

const canActivateRatingId = (route: ActivatedRouteSnapshot) => {
  inject(RatingService).exists(route.paramMap.get('id'));
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
    loadComponent: () => import('./ratings/ratings.component'),
  },
  {
    path: ':collectionId/:id',
    title: (activatedRoute) =>
      inject(RatingsService).resolveRatingName(
        activatedRoute.paramMap.get('id')
      ),
    canActivate: [canActivateRatingId],
    loadComponent: () => import('./ratings/ratings.component'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
