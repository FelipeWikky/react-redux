import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { ConnectedRouter } from 'connected-react-router'

// import history from './history'

import NavBar from '../components/NavBar'

import Home from '../pages/Home'
import Workers from '../pages/Workers'
import NewWorker from '../pages/NewWorker'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export default function Routes() {

	return (
		<BrowserRouter>
		<NavBar/>
		{/* <ConnectedRouter history={history}> */}
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/workers' exact component={Workers} />
				<Route path='/new-worker' exact component={NewWorker} />
				<Route path='/login' exact component={SignIn} />
				<Route path='/register' exact component={SignUp} />
				<Route path='*' exact component={Error404} />
			</Switch>
		{/* </ConnectedRouter> */}
		 </BrowserRouter>

	);
}

const Error404 = () => {
	return (
		<div>
			Error 404
		</div>
	);
}