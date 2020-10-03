import React from 'react';

import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const NavBarComponent: React.FC = () => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<NavLink to='/'>
				<Navbar.Brand href="/">
					Redux-Saga
				</Navbar.Brand>
			</NavLink>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavLink to='/new-worker'  >
						<Nav.Link href='new-worker' >Cadastrar Funcionário</Nav.Link>
					</NavLink>
					<NavLink to='/workers'>
						<Nav.Link href="workers">Funcionários</Nav.Link>
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBarComponent;