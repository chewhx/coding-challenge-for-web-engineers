import {
	AUTH_LOGIN_FAIL,
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT,
} from './auth.constants';
import * as Realm from 'realm-web';
import { realm } from '../realm';
import { Dispatch } from '@reduxjs/toolkit';

export const login =
	(email: string, password: string) => async (dispatch: Dispatch) => {
		try {
			dispatch({
				type: AUTH_LOGIN_REQUEST,
			});

			const credentials = Realm.Credentials.emailPassword(email, password);
			await realm.logIn(credentials);

			dispatch({
				type: AUTH_LOGIN_SUCCESS,
			});
		} catch (error) {
			dispatch({
				type: AUTH_LOGIN_FAIL,
				payload: error,
			});
		}
	};

export const logout = () => async (dispatch: Dispatch) => {
	await realm.currentUser?.logOut();
	dispatch({
		type: AUTH_LOGOUT,
	});
};
