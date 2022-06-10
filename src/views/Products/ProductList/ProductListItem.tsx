import dayjs from 'dayjs';
import React from 'react';
import { Button, Col, Image, ListGroup, Row, Stack } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { TProduct } from '../../../types/Product.type';

interface Props {
	product: TProduct;
}

const ProductListItem = ({ product }: Props) => {
	const { push } = useHistory();
	return (
		<ListGroup.Item
			key={product.sku}
			// style={{ minHeight: '250px' }}
			className="p-5"
		>
			<Row>
				<Col xs={12} sm={6} md={3} lg={2}>
					<Image src={product.image} fluid alt={product.title} />
				</Col>
				<Col xs={12} sm={6} md={9} lg={10}>
					<p>SKU: {product.sku}</p>
					<h4>{product.title}</h4>
					<Stack direction="horizontal" gap={3} className="mt-4">
						<Button onClick={() => push(`/products/edit/${product._id}`)}>
							Edit Product
						</Button>
						<Button
							variant="danger"
							onClick={() => push(`/products/delete/${product._id}`)}
						>
							Delete
						</Button>
					</Stack>
					<Stack direction="horizontal" gap={4} className="mt-4">
						<small>
							Last updated on{' '}
							{dayjs(product?.updated_at).format('DD MMM YYYY HH:mm:ss A')}
						</small>
						<small>
							Created on{' '}
							{dayjs(product?.created_at).format('DD MMM YYYY HH:mm:ss A')}
						</small>
					</Stack>
				</Col>
			</Row>
		</ListGroup.Item>
	);
};

export default ProductListItem;
