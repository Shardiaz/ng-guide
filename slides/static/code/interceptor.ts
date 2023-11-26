// auth-interceptor.ts
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';

export function authInterceptor(
	request: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
	const authToken = inject(AuthService).getAuthToken();
	const newRequest = request.clone({
		headers: request.headers.append('X-Authentication-Token', authToken)
	});
	return next(newRequest);
}

// app.config.ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { authInterceptor } from './auth-interceptor';

export const appConfig: ApplicationConfig = {
	providers: [provideHttpClient(withInterceptors([authInterceptor]))]
};
