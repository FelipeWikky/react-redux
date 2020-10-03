import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Workers from './pages/Workers'
import NewWorker from './pages/NewWorker'
import SignIn from './pages/SignIn'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/workers' exact component={Workers} />
				<Route path='/new-worker' exact component={NewWorker} />
				<Route path='/login' exact component={SignIn}  />
				<Route path='*' exact component={Error404} />
			</Switch>
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