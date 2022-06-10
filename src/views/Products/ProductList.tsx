import React from 'react';
import { Button, Col, ListGroup, Pagination, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { TProduct } from '../../types/Product.type';
import ProductListItem from './ProductList/ProductListItem';

interface Props {
	products: TProduct[];
	numPages: number;
	setPage: (n: number) => void;
	size: number;
	page: number;
}

const ProductList = ({ products, numPages, setPage, size, page }: Props) => {
	const { replace, push } = useHistory();
	const breakpoint = useMediaQuery('(max-width: 768px)');

	return (
		<ListGroup variant="flush">
			<Row className="d-flex justify-content-between">
				<Col lg={9}>
					<Pagination
						className={breakpoint ? 'mx-auto py-3' : 'ms-auto'}
						style={{ overflow: 'scroll' }}
					>
						<Pagination.First
							disabled={page === 1}
							onClick={() => {
								replace(`/products?page=${1}&size=${size}`);
								setPage(1);
							}}
						/>
						<Pagination.Prev
							disabled={page === 1}
							onClick={() => {
								replace(`/products?page=${page - 1}&size=${size}`);
								setPage(page - 1);
							}}
						/>
						{numPages &&
							Array(numPages)
								.fill(1)
								.map((e, i) => e + i)
								.map((e) => (
									<Pagination.Item
										key={`page-${e}`}
										active={e === page}
										onClick={() => {
											replace(`/products?page=${e}&size=${size}`);
											setPage(e);
										}}
									>
										{e}
									</Pagination.Item>
								))}
						<Pagination.Next
							disabled={page === numPages}
							onClick={() => {
								replace(`/products?page=${page + 1}&size=${size}`);
								setPage(page + 1);
							}}
						/>
						<Pagination.Last
							disabled={page === numPages}
							onClick={() => {
								replace(`/products?page=${numPages}&size=${size}`);
								setPage(numPages);
							}}
						/>
					</Pagination>
				</Col>
				<Col lg={3}>
					<Button
						className={breakpoint ? 'w-100 my-4' : ''}
						onClick={() => push('/products/create')}
						size="lg"
					>
						Create new product
					</Button>
				</Col>
			</Row>
			{!products.length ? (
				<p className="text-center">No products.</p>
			) : (
				products?.map((product) => (
					<ProductListItem key={product._id} product={product} />
				))
			)}
		</ListGroup>
	);
};

export default ProductList;
