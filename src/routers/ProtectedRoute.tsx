import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

const ProtectedRoute = (routeProps: RouteProps) => {
	const auth = useAuth();

	if (auth.isAuthenticated) {
		return <Route {...routeProps} />;
	}
	return <Redirect to="/" />;
};

export default ProtectedRoute;
