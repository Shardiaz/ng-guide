import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
