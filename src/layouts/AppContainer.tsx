import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from '../hooks/auth';
import Navbar from './Navbar';

const AppContainer: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const { isAuthenticated } = useAuth();
	return (
		<Container>
			{isAuthenticated && <Navbar />}
			<main className="py-3">{children}</main>
		</Container>
	);
};

export default AppContainer;
