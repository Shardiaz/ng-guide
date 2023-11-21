// app.routes.ts
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: '**', redirectTo: 'home' }
];

// app.config.ts
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(AppRoutes)]
};
