import { createSelector } from '@ngrx/store';

export const selectJwt = (state: AppState) => state.jwt;
export const selectError = (state: AppState) => state.error;

export const selectIsLoggedIn = createSelector(
	selectError,
	selectJwt,
	(error: Error, jwt: string) => {
		return error == null && !!jwt;
	}
);
