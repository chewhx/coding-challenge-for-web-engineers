import { Dispatch } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { db } from '../realm';
import {
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
} from './products.constants';

const collection = db?.collection('products');

export const getProducts =
	(opts?: { limit?: number; query?: string }) => async (dispatch: Dispatch) => {
		try {
			dispatch({
				type: PRODUCT_LIST_REQUEST,
			});

			const findFilters: Record<string, { $regex?: string; $options?: 'i' }> =
				{};

			if (opts) {
				findFilters.title = { $regex: opts.query, $options: 'i' };
			}

			const data = await collection?.find(findFilters, {
				sort: { updated_at: -1 },
			});

			dispatch({
				type: PRODUCT_LIST_SUCCESS,
				payload: data?.map((e) => ({ ...e, _id: e._id.toString() })),
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_LIST_FAIL,
				payload: error,
			});
		}
	};

export const getProductDetails =
	(objectId: string) => async (dispatch: Dispatch) => {
		try {
			dispatch({
				type: PRODUCT_DETAILS_REQUEST,
			});

			const data = await collection?.findOne({ _id: { $oid: objectId } });

			dispatch({
				type: PRODUCT_DETAILS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_DETAILS_FAIL,
				payload: error,
			});
		}
	};

export type UpdateProductDto = {
	title: string;
	image: string;
	sku: string;
};

export const updateProductDetail =
	(
		objectId: string,
		updateProductDto: UpdateProductDto,
		opts?: { onSuccess: (data?: any) => void }
	) =>
	async (dispatch: Dispatch<any>) => {
		try {
			dispatch({ type: PRODUCT_UPDATE_REQUEST });

			const promise = collection?.findOneAndUpdate(
				{ _id: { $oid: objectId } },
				{ $set: { ...updateProductDto, updated_at: new Date().toISOString() } },
				{ returnNewDocument: true }
			);

			toast.promise(promise!, {
				loading: 'Updating product...',
				success: 'Product updated!',
				error: 'Error updating product',
			});

			const data = await promise;

			dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
			dispatch(getProducts());
			dispatch(getProductDetails(objectId));

			if (opts) {
				opts.onSuccess(data);
			}
		} catch (error) {
			dispatch({
				type: PRODUCT_UPDATE_FAIL,
				payload: error,
			});
		}
	};

export const createProduct =
	(
		createProductDto: UpdateProductDto,
		opts?: {
			onSuccess: (data?: any) => void;
		}
	) =>
	async (dispatch: Dispatch<any>) => {
		try {
			dispatch({ type: PRODUCT_CREATE_REQUEST });

			const promise = collection?.findOneAndUpdate(
				{ sku: createProductDto.sku },
				{
					$set: {
						...createProductDto,
						updated_at: new Date().toISOString(),
						created_at: new Date().toISOString(),
					},
				},
				{ returnNewDocument: true, upsert: true }
			);

			toast.promise(promise!, {
				loading: 'Creating product...',
				success: 'Product created!',
				error: 'Error creating product',
			});

			const data = await promise;

			if (opts) {
				opts.onSuccess(data);
			}

			dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
			dispatch(getProducts());
		} catch (error) {
			dispatch({ type: PRODUCT_CREATE_FAIL, payload: error });
		}
	};

export const deleteProduct =
	(
		objectId: string,
		opts?: {
			onSuccess: (data?: any) => void;
		}
	) =>
	async (dispatch: Dispatch<any>) => {
		try {
			dispatch({ type: PRODUCT_DELETE_REQUEST });

			const promise = collection?.deleteOne({
				_id: { $oid: objectId },
			});

			const data = await promise;

			toast.promise(promise!, {
				loading: 'Deleting product...',
				success: 'Product deleted',
				error: 'Error deleting product',
			});

			if (opts) {
				opts.onSuccess(data);
			}

			dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
			dispatch(getProducts());
		} catch (error) {
			dispatch({ type: PRODUCT_DELETE_FAIL, payload: error });
		}
	};
