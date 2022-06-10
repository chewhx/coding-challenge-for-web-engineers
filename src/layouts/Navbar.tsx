import React from 'react';
import { Button, Image, Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { logout } from '../modules/auth/auth.actions';
import brand from '../assets/images/brand.jpg';
import useMediaQuery from '../hooks/useMediaQuery';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const _Navbar = () => {
	const dispatch = useDispatch<any>();
	const { push } = useHistory();
	const { pathname } = useLocation();
	const [show, setShow] = React.useState<boolean>(false);
	const breakpoint = useMediaQuery('(max-width: 768px)');

	const closeCanvas = () => setShow(false);
	const openCanvas = () => setShow(true);

	return (
		<Navbar expand="lg" variant="light" bg="white">
			<Navbar.Brand onClick={() => push('/dashboard')}>
				<Image
					src={brand}
					alt="dashboard"
					className="btn btn-link"
					fluid
					width={150}
				/>
			</Navbar.Brand>
			{!breakpoint ? (
				<>
					<Stack direction="horizontal" gap={3} className="mx-auto">
						<NavLink to="/dashboard">
							<Button
								variant={pathname === '/dashboard' ? 'warning' : 'outline-dark'}
							>
								Dashboard
							</Button>
						</NavLink>
						<NavLink to="/products">
							<Button
								variant={pathname === '/products' ? 'warning' : 'outline-dark'}
							>
								Products
							</Button>
						</NavLink>
					</Stack>
					<Nav className="ms-auto">
						<Button onClick={() => dispatch(logout())}>Log out</Button>
					</Nav>
				</>
			) : (
				<>
					<NavbarToggle onClick={openCanvas} />
					<Offcanvas show={show} onHide={closeCanvas} placement="bottom">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Menu</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Stack direction="horizontal" gap={3} className="mx-auto">
								<NavLink to="/dashboard">
									<Button
										variant={
											pathname === '/dashboard' ? 'warning' : 'outline-dark'
										}
									>
										Dashboard
									</Button>
								</NavLink>
								<NavLink to="/products">
									<Button
										variant={
											pathname === '/products' ? 'warning' : 'outline-dark'
										}
									>
										Products
									</Button>
								</NavLink>
								<Nav.Item>
									<Button onClick={() => dispatch(logout())}>Log out</Button>
								</Nav.Item>
							</Stack>
						</Offcanvas.Body>
					</Offcanvas>
				</>
			)}
		</Navbar>
	);
};

export default _Navbar;
