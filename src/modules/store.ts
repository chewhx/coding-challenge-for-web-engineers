import thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer, AuthState } from './auth/auth.reducer';
import {
	productCreateReducer,
	productDeleteReducer,
	ProductDetail,
	productDetailReducer,
	ProductListState,
	productReducer,
	ProductUpdate,
	productUpdateReducer,
} from './products/products.reducer';

const reducer = combineReducers({
	auth: authReducer,
	productList: productReducer,
	productDetails: productDetailReducer,
	productUpdate: productUpdateReducer,
	productCreate: productCreateReducer,
	productDelete: productDeleteReducer,
});

export type RootState = {
	auth: AuthState;
	productList: ProductListState;
	productDetails: ProductDetail;
	productUpdate: ProductUpdate;
	productCreate: ProductUpdate;
	productDelete: ProductUpdate;
};

const preloadedState = {
	// auth: {
	// 	loading: false,
	// 	isAuthenticated: realm.currentUser?.isLoggedIn,
	// 	isError: false,
	// 	error: null,
	// },
};

const store = configureStore({
	reducer,
	preloadedState,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
