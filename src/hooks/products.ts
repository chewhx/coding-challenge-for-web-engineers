import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	createProduct,
	deleteProduct,
	getProductDetails,
	getProducts,
	updateProductDetail,
	UpdateProductDto,
} from '../modules/products/products.actions';
import { RootState } from '../modules/store';
import useDebounce from './useDebounce';

export const useProductList = (opts?: { limit?: number; query?: string }) => {
	const dispatch = useDispatch<any>();
	const debounceQuery = useDebounce(opts?.query, 500);
	React.useEffect(() => {
		dispatch(getProducts({ ...opts, query: debounceQuery }));
	}, [debounceQuery]);
	return useSelector((state: RootState) => state.productList);
};

export const useProductDetails = (objectId: string) => {
	const dispatch = useDispatch<any>();
	React.useEffect(() => {
		dispatch(getProductDetails(objectId));
	}, []);
	return useSelector((state: RootState) => state.productDetails);
};

export const useUpdateProductDetails = (opts?: {
	onSuccess: (data?: any) => void;
}) => {
	const dispatch = useDispatch<any>();
	const mutate = (objectId: string, updateProductDto: UpdateProductDto) =>
		dispatch(updateProductDetail(objectId, updateProductDto, opts));
	const productUpdate = useSelector((state: RootState) => state.productUpdate);
	return { mutate, ...productUpdate };
};

export const useCreateProduct = (opts?: {
	onSuccess: (data?: any) => void;
}) => {
	const dispatch = useDispatch<any>();
	const mutate = (createProductDto: UpdateProductDto) =>
		dispatch(createProduct(createProductDto, opts));
	const productCreate = useSelector((state: RootState) => state.productCreate);
	return { mutate, ...productCreate };
};

export const useDeleteProduct = (opts?: {
	onSuccess: (data?: any) => void;
}) => {
	const dispatch = useDispatch<any>();
	const mutate = (objectId: string) => dispatch(deleteProduct(objectId, opts));
	const productDelete = useSelector((state: RootState) => state.productDelete);
	return { mutate, ...productDelete };
};
