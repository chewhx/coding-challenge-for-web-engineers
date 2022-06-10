import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { protectedRoutes, publicRoutes } from './routes';

const Router = () => {
	return (
		<Switch>
			{publicRoutes.map((e) => (
				<Route key={e.path as string} {...e} />
			))}
			{protectedRoutes.map((e) => (
				<ProtectedRoute key={e.path as string} {...e} />
			))}
		</Switch>
	);
};

export default Router;
