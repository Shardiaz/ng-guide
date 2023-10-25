import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    data: {
      name: 'Dashboard',
    },
  },
  {
    path: 'project/:id',
    loadComponent: () =>
      import('./project/project.component').then((c) => c.ProjectComponent),
    data: {
      name: 'ProjectDetails',
    },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
