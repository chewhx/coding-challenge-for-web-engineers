import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import SearchProducts from '../components/SearchProducts';
import View from '../components/View';
import { useProductList } from '../hooks/products';
import useDebounce from '../hooks/useDebounce';
import CreateProduct from './Products/CreateProduct';
import DeleteProduct from './Products/DeleteProduct';
import ProductList from './Products/ProductList';
import ProductDetail from './Products/UpdateProduct';

const Products = () => {
	const { search } = useLocation();

	// Search
	const [input, setInput] = React.useState<string>('');

	// Products
	const url = new URLSearchParams(search);
	const [page, setPage] = React.useState<number>(Number(url.get('page') || 1));
	const size = Number(url.get('size') || 10);

	const products = useProductList({ query: input });
	const sliceStart = (page - 1) * size;
	const sliceEnd = page * size;

	const numPages = Math.ceil((products?.data?.length || 0) / size);

	return (
		<>
			<input
				type="search"
				placeholder="Search..."
				className="form-control mb-4"
				value={input}
				onChange={(e) => {
					setInput(e.currentTarget.value);
				}}
			/>
			<View isLoading={products.isLoading}>
				<ProductList
					setPage={setPage}
					size={size}
					page={page}
					// products={products?.data || []}
					numPages={numPages}
					products={products?.data?.slice(sliceStart, sliceEnd) || []}
				/>
				<Route exact path="/products/create" component={CreateProduct} />
				<Route
					exact
					path="/products/edit/:objectId"
					component={ProductDetail}
				/>
				<Route
					exact
					path="/products/delete/:objectId"
					component={DeleteProduct}
				/>
			</View>
		</>
	);
};

export default Products;
