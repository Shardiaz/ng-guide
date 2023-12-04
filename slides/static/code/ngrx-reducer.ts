import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
	jwt: string | null;
	error: Error | null;
}

export const initialState: AuthState = {
	jwt: null,
	error: null
};

export const authReducer = createReducer(
	initialState,
	on(AuthActions.loginSuccess, (state, action) => ({ ...state, jwt: action.jwt })),
	on(AuthActions.loginError, (state, action) => ({ ...state, error: action.error }))
);
