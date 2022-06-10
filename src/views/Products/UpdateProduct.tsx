import React from 'react';
import { Field, Formik } from 'formik';
import {
	Button,
	Container,
	Form,
	Image,
	Modal,
	Spinner,
	Stack,
} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import View from '../../components/View';
import {
	useProductDetails,
	useUpdateProductDetails,
} from '../../hooks/products';
import { UpdateProductDto } from '../../modules/products/products.actions';

const ProductDetail = () => {
	const { replace } = useHistory();
	const { objectId } = useParams<{ objectId: string }>();
	const product = useProductDetails(objectId);
	const { mutate, isLoading } = useUpdateProductDetails({
		onSuccess: () => replace('/products'),
	});
	return (
		<Modal show onHide={() => replace('/products')} size="lg" centered>
			<Modal.Body>
				<View isLoading={product.isLoading}>
					<Formik
						onSubmit={(values: UpdateProductDto) => mutate(objectId, values)}
						initialValues={product.data}
						enableReinitialize
						validateOnChange
					>
						{({ resetForm, submitForm, touched }) => (
							<Container className="p-3">
								<h1 className="pb-4">
									Update Product SKU {product?.data?.sku}
								</h1>
								<div className="py-3 text-center">
									<Image
										className="border p-3 border-1"
										src={product?.data?.image}
										fluid
										alt={product?.data?.title}
										style={{ maxHeight: '350px' }}
									/>
								</div>
								<div className="my-3">
									<Form.Label htmlFor="sku">Sku</Form.Label>
									<Field className="form-control" id="sku" name="sku" />
								</div>
								<div className="my-3">
									<Form.Label htmlFor="title">Title</Form.Label>
									<Field className="form-control" id="title" name="title" />
								</div>
								<div className="my-3">
									<Form.Label htmlFor="image">Image</Form.Label>
									<Field as={Form.Control} id="image" name="image" />
								</div>

								<Stack direction="horizontal" gap={3}>
									<Button onClick={() => submitForm()} disabled={isLoading}>
										{isLoading && (
											<Spinner animation="border" size="sm" className="me-2" />
										)}
										Update
									</Button>
									<Button
										variant="warning"
										onClick={() => resetForm()}
										disabled={isLoading || !Object.keys(touched).length}
									>
										Reset
									</Button>
									<Button
										variant="dark"
										onClick={() => replace('/products')}
										disabled={isLoading}
									>
										Close
									</Button>
								</Stack>
							</Container>
						)}
					</Formik>
				</View>
			</Modal.Body>
		</Modal>
	);
};

export default ProductDetail;
