import React from 'react';
import { useProductList } from '../hooks/products';
import useDebounce from '../hooks/useDebounce';

const SearchProducts = () => {
	const [input, setInput] = React.useState<string>('');
	// useProductList();
	return (
		<>
			{useDebounce(input, 500)}
			{input.length}
			<input
				type="search"
				placeholder="Search..."
				className="form-control mb-4"
				value={input}
				onChange={(e) => {
					setInput(e.currentTarget.value);
				}}
			/>
		</>
	);
};

export default SearchProducts;
