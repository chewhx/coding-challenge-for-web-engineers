import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<div className="h1 my-4">Welcome to Dashboard</div>
			<ul>
				<li>
					<NavLink to="/products">Products</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Dashboard;
