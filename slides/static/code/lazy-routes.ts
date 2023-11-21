export const AppRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'profile', component: ProfileComponent },
	{
		path: 'admin',
		loadComponent: () => import('./admin/admin.component').then((m) => m.AdminComponet)
	},
	{
		path: 'vip',
		loadChildren: () => import('@modules/vip').then((m) => m.vipRoutes)
	},
	{ path: '**', redirectTo: 'home' }
];
