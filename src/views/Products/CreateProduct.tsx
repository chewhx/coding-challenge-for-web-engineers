import { Field, Formik } from 'formik';
import React from 'react';
import { Button, Form, Image, Modal, Spinner, Stack } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCreateProduct } from '../../hooks/products';

const CreateProduct = () => {
	const { replace } = useHistory();
	const { mutate, isLoading } = useCreateProduct({
		onSuccess: () => replace('/products'),
	});
	return (
		<Modal show onHide={() => replace('/products')} size="lg" centered>
			<Modal.Body>
				<Formik
					onSubmit={(values) => mutate(values)}
					initialValues={{ title: '', image: '', sku: '' }}
				>
					{({ submitForm, resetForm, values }) => (
						<>
							<div className="my-3 text-center">
								<h1 className="mb-5">Create a new product</h1>{' '}
								<Image
									className="border p-3 border-1"
									src={values.image}
									fluid
									alt={values.title}
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
									Create
								</Button>
								<Button
									variant="warning"
									onClick={() => resetForm()}
									disabled={isLoading}
								>
									Reset
								</Button>
								<Button variant="dark" onClick={() => replace('/products')}>
									Exit
								</Button>
							</Stack>
						</>
					)}
				</Formik>
			</Modal.Body>
		</Modal>
	);
};

export default CreateProduct;
