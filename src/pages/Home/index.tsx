import React from 'react';

import Constants from '../../utils/Constants'
import NavBar from '../../components/NavBar'

const Home: React.FC = () => {
	document.title = `Início - ${Constants.NAME_APP}`;
	return (
		<>
			<NavBar/>
			Home Page
		</>
	);
}

export default Home;