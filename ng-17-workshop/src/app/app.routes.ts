import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    title: 'Dashboard',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'FAQ',
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    title: 'Settings',
    path: 'settings',
    loadComponent: () => import('./settings/settings.component'),
  },
  {
    title: 'Collections',
    path: 'collections',
    loadChildren: () =>
      import('@score/collections').then((m) => m.CollectionRoutes),
  },
  {
    title: 'Ratings',
    path: 'ratings',
    loadChildren: () => import('@score/ratings').then((m) => m.RatingRoutes),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
