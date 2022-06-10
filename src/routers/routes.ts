import { RouteProps } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Home from '../views/Home';
import Products from '../views/Products';

export const publicRoutes: RouteProps[] = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
];

export const protectedRoutes: RouteProps[] = [
	{ path: '/dashboard', component: Dashboard, exact: true },
	{ path: '/products', component: Products },
];
