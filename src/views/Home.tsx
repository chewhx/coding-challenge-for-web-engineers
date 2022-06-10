import { Field, Formik } from 'formik';
import React from 'react';
import {
	Alert,
	Button,
	Container,
	Form,
	Image,
	Spinner,
	Stack,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import brand from '../assets/images/brand.jpg';
import { login } from '../modules/auth/auth.actions';
import { useAuth } from '../hooks/auth';
import { Redirect } from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch<any>();
	const auth = useAuth();

	const onSubmitHandler = (email: string, password: string) => {
		dispatch(login(email, password));
	};

	if (auth.isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Formik
			onSubmit={({ email, password }) => onSubmitHandler(email, password)}
			initialValues={{ email: '', password: '' }}
			enableReinitialize
		>
			{({ submitForm }) => (
				<Container>
					<div className="mx-auto" style={{ maxWidth: '400px' }}>
						<Image fluid src={brand} alt="mightyjaxx" />
						<Form.Group className="my-3">
							<Form.Label htmlFor="email">Email</Form.Label>
							<Field as={Form.Control} id="email" name="email" />
						</Form.Group>
						<Form.Group className="my-3">
							<Form.Label htmlFor="password">Password</Form.Label>
							<Field
								as={Form.Control}
								type="password"
								id="password"
								name="password"
							/>
						</Form.Group>
						{auth?.isError && (
							<Alert variant="danger">{auth?.error?.error as string}</Alert>
						)}
						<Stack direction="horizontal" gap={3}>
							<Button
								size="lg"
								className="w-100 my-3"
								onClick={() => submitForm()}
								disabled={auth.isLoading}
							>
								{auth.isLoading && (
									<Spinner className="me-2" animation="border" size="sm" />
								)}
								Log In
							</Button>
						</Stack>
					</div>
				</Container>
			)}
		</Formik>
	);
};

export default Home;
