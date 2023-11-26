// feature: routes.ts
import { Routes } from '@angular/router';

export const FeatureRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./overview/overview.component')
	},
	{
		path: ':id',
		loadComponent: () => import('./item/item.component')
	},
	{
		path: '**',
		redirectTo: ''
	}
];

// app rotes.ts
export const routes: Routes = [
	{
		path: 'feature',
		loadChildren: () => import('@projects/feature').then((m) => m.FeatureRoutes)
	}
];
