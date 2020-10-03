import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import { Auth } from '../../store/auth/types';
import * as AuthActions from '../../store/auth/actions'
import { ApplicationState } from '../../store'


const NavBarComponent: React.FC = () => {
	const dispatch = useDispatch();
	const auth: Auth = useSelector((store: ApplicationState) => store.authStore.auth);
	const token = useSelector((store: ApplicationState) => store.authStore.token ? store.authStore.token : '');

	const history = useHistory();

	function handleSignOut(){
		dispatch( AuthActions.requestsignOut() );
		window.alert('Deslogado com Sucesso');
		history.push('/');
	}

	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<NavLink to='/'>
					Redux-Saga
			</NavLink>
			&nbsp;&nbsp;
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavLink to='/new-worker'  >
							Cadastrar Funcionário
					</NavLink>
					&nbsp;&nbsp;
					<NavLink to='/workers'>
							Funcionários
					</NavLink>
				</Nav>

				<Form inline>
					{
						token ?
							<Nav className='mr-auto'>
								<NavLink to='/'>
									Olá, {auth.email}
								</NavLink>
								&nbsp;&nbsp;&nbsp;
								<NavLink to='/' onClick={handleSignOut}>
									Sair
								</NavLink>
							</Nav>
						:
							<Nav className="mr-auto">
								<NavLink to='/new-worker'  >
									Registrar
								</NavLink>
								&nbsp;&nbsp;&nbsp;
								<NavLink to='/login'>
									Login
								</NavLink>
							</Nav>
						
					}
				</Form>

			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBarComponent;