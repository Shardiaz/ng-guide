import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Dashboard',
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    title: 'Nested route',
    path: 'nested-route',
    loadChildren: () => import('@slides/nested-route'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
