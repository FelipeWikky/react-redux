import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Constants from '../../utils/Constants'
import NavBar from '../../components/NavBar'

import * as WorkerActions from '../../store/worker/actions'

import { ApplicationState } from '../../store'

const Home: React.FC = () => {
	document.title = `Início - ${Constants.NAME_APP}`;

	const dispatch = useDispatch();
	const requested = useSelector((store: ApplicationState) => store.workerStore.requested);

	useEffect(() => {
		if (!requested)
			dispatch(WorkerActions.loadWorkers())
	}, [dispatch, requested]);

	return (
		<>
			<NavBar />
		</>
	);
}

export default Home;