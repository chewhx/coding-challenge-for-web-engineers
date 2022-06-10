import { realm } from '../realm';
import {
	AUTH_LOGIN_FAIL,
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT,
} from './auth.constants';

export type AuthState = {
	isLoading: boolean;
	isAuthenticated: boolean;
	isError: boolean;
	error: Record<string, unknown> | null;
};

export const authState: AuthState = {
	isLoading: false,
	isAuthenticated: false,
	isError: false,
	error: null,
};

export const authReducer = (
	state = authState,
	action: { type: string; payload: unknown }
) => {
	switch (action.type) {
		case AUTH_LOGIN_REQUEST:
			return {
				isLoading: true,
				isAuthenticated: false,
				isError: false,
				error: null,
			};
		case AUTH_LOGIN_SUCCESS:
			return {
				isLoading: false,
				isAuthenticated: true,
				isError: false,
				error: null,
			};
		case AUTH_LOGIN_FAIL:
			return {
				isLoading: false,
				isAuthenticated: false,
				isError: true,
				error: action.payload,
			};
		case AUTH_LOGOUT:
			return {
				isLoading: false,
				isAuthenticated: false,
				isError: false,
				error: null,
			};
		default:
			return {
				...state,
				isAuthenticated: realm.currentUser?.isLoggedIn || false,
			};
	}
};
