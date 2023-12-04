import { inject } from '@angular/core';
import { AuthService } from '@api';
import { ToastService } from '@core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import * as AuthActions from './auth.actions';

export const login = createEffect(
	(actions$ = inject(Actions), authService = inject(AuthService)) => {
		return actions$.pipe(
			ofType(AuthActions.login),
			exhaustMap((action) =>
				authService.login(action.email, action.password).pipe(
					map((jwt) => AuthActions.loginSuccess({ jwt })),
					catchError((error) => of(AuthActions.loginError({ error })))
				)
			)
		);
	},
	{ functional: true }
);

export const loginError = createEffect(
	(actions$ = inject(Actions), toastService = inject(ToastService)) => {
		return actions$.pipe(
			ofType(AuthActions.loginError),
			tap((error) => ToastService.ShowError(error))
		);
	},
	{ functional: true, dispatch: false }
);
