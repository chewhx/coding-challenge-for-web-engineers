import { TProduct } from '../../types/Product.type';
import {
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_RESET,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_RESET,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_LIST_FETCHING,
} from './products.constants';

export type ProductListState = {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	isFetching: boolean;
	data: TProduct[] | null;
	error: Record<string, unknown> | null;
};

export const productListState: ProductListState = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	isFetching: false,
	data: null,
	error: null,
};

export const productReducer = (
	state = productListState,
	action: { type: string; payload: unknown }
) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return {
				...state,
				isLoading: true,
				isFetching: true,
			};
		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				isLoading: false,
				isFetching: false,
				isSuccess: true,
				data: action.payload,
			};
		case PRODUCT_LIST_FAIL:
			return {
				...state,
				isLoading: false,
				isSuccess: false,
				isFetching: false,
				isError: true,
				error: action.payload,
			};
		case PRODUCT_LIST_FETCHING:
			return {
				...state,
				isLoading: false,
				isFetching: true,
			};
		default:
			return state;
	}
};

export type ProductDetail = {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	data: any | null;
	error: Record<string, unknown> | null;
};

const productDetailsState: ProductDetail = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	data: null,
	error: null,
};

export const productDetailReducer = (
	state = productDetailsState,
	action: { type: string; payload: unknown }
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {
				...state,
				isLoading: true,
				isSuccess: false,
				isError: false,
				data: null,
				error: null,
			};

		case PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				isError: false,
				data: action.payload,
				error: null,
			};

		case PRODUCT_DETAILS_FAIL:
			return {
				...state,
				isLoading: false,
				isSuccess: false,
				isError: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export type ProductUpdate = {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	data: any[] | null;
	error: Record<string, unknown> | null;
};

const productUpdateState: ProductUpdate = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	data: null,
	error: null,
};

export const productUpdateReducer = (
	state = productUpdateState,
	action: { type: string; payload: unknown }
) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			return { ...state, isLoading: true };
		case PRODUCT_UPDATE_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				data: action.payload,
			};
		case PRODUCT_UPDATE_FAIL:
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		case PRODUCT_UPDATE_RESET:
			return productDetailsState;
		default:
			return state;
	}
};

export const productCreateReducer = (
	state = productUpdateState,
	action: { type: string; payload: unknown }
) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQUEST:
			return { ...state, isLoading: true };
		case PRODUCT_CREATE_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				data: action.payload,
			};
		case PRODUCT_CREATE_FAIL:
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		case PRODUCT_CREATE_RESET:
			return productDetailsState;
		default:
			return state;
	}
};

export const productDeleteReducer = (
	state = productUpdateState,
	action: { type: string; payload: unknown }
) => {
	switch (action.type) {
		case PRODUCT_DELETE_REQUEST:
			return { ...state, isLoading: true };
		case PRODUCT_DELETE_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				data: action.payload,
			};
		case PRODUCT_DELETE_FAIL:
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		default:
			return state;
	}
};
