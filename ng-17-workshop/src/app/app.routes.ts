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
    path: '**',
    redirectTo: 'home',
  },
];
