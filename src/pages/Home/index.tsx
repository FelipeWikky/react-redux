import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Constants from '../../utils/Constants'

import * as WorkerActions from '../../store/worker/actions'

import { ApplicationState } from '../../store'

const Home: React.FC = () => {
	document.title = `Início - ${Constants.NAME_APP}`;

	const dispatch = useDispatch();
	const requested = useSelector((store: ApplicationState) => store.workerStore.requested);
	const token = useSelector((store:ApplicationState) => store.authStore.token);

	useEffect(() => {
		if (!requested)
			dispatch(WorkerActions.loadWorkers())
	}, [dispatch, requested]);

	return (
		<>
			Tela Inicial
			{token}
		</>
	);
}

export default Home;