import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [isLoggedIn]
	},
	{
		path: 'edit/:id',
		component: EditorComponent,
		canDeactivate: [isEditorPrune],
		canMatch: [idExists]
	},
	{
		path: 'sales',
		component: SalesComponent,
		resolve: { data: getAdvertisment }
	},
	{
		path: 'admin',
		loadChildren: () => import('@org/admin').then((m) => m.AdminRoutes),
		canActivateChild: [isAdmin]
	}
];
