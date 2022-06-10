import React from 'react';
import AppContainer from './layouts/AppContainer';
import './assets/styles/index.scss';
import Router from './routers/Router';

const App = () => {
	return (
		<AppContainer>
			<Router />
		</AppContainer>
	);
};

export default App;
