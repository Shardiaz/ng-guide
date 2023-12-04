import { User } from '@api';
import {
	createActionGroup,
	createFeature,
	createReducer,
	emptyProps,
	on,
	props
} from '@ngrx/store';

export const UserActions = createActionGroup({
	source: 'User API',
	events: {
		load: emptyProps(),
		loadSuccess: props<{ users: User[] }>(),
		loadError: props<{ error: Error }>()
	}
});

interface State {
	users: User[];
	isLoading: boolean;
}

export const initialState: State = {
	users: [],
	isLoading: false
};

export const userFeature = createFeature({
	name: 'users',
	reducuer: createReducer(
		initialState,
		on(UserActions.load, (state) => ({ ...state, isLoading: true })),
		on(UserActions.loadSuccess, (state, action) => ({
			...state,
			users: action.users,
			isLoading: false
		})),
		on(UserActions.loadError, (state, action) => ({ ...state, users: [], error: action.error }))
	)
});
