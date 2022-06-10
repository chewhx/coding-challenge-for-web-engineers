import React from 'react';
import { Alert, Button, Image, Modal } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import View from '../../components/View';
import { useDeleteProduct, useProductDetails } from '../../hooks/products';

const DeleteProduct = () => {
	const { replace } = useHistory();
	const { objectId } = useParams<{ objectId: string }>();
	const product = useProductDetails(objectId);
	const { mutate } = useDeleteProduct({
		onSuccess: () => replace('/products'),
	});
	return (
		<Modal show onHide={() => replace('/products')} centered>
			<Modal.Body className="bg-light text-center">
				<View isLoading={product.isLoading}>
					<h3 className="text-danger">⚠️ Warning</h3>
					<h5 className="text-center">
						You are about to DELETE the following product:
					</h5>
					<Image
						className="my-3"
						src={product?.data?.image}
						fluid
						alt={product?.data?.title}
						style={{ maxHeight: '200px' }}
					/>
					<div>
						<strong>SKU:</strong>
						<p>{product?.data?.sku}</p>
						<strong>Title:</strong>
						<p>{product?.data?.title}</p>
					</div>
					<Alert variant="danger">
						<strong>
							This action cannot be reversed. The data will be permanently lost.
						</strong>
						<div className="mt-3">
							<Button
								// size="lg"
								variant="outline-dark"
								onClick={() => mutate(objectId)}
							>
								Delete forever
							</Button>
						</div>
					</Alert>
					<Button
						size="lg"
						variant="danger"
						className="w-100"
						onClick={() => replace('/products')}
					>
						Exit and go back
					</Button>
				</View>
			</Modal.Body>
		</Modal>
	);
};

export default DeleteProduct;
