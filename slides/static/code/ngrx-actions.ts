import { createAction, props } from '@ngrx/store';

export const login = createAction(
	'[Authorization] LogIn',
	props<{ email: string; password: string }>()
);
export const loginSuccess = createAction('[Authorization] LogIn sucess', props<{ jwt: string }>());
export const loginError = createAction('[Authorization] LogIn error', props<{ error: Error }>());
export const logut = createAction('[Authorization] Logout');
