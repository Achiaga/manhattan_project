import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import { Home } from './Home';
import { Casino } from './Components/Casino';
import { Coin } from './Components/Coin';
import { Square } from './Components/Square';

function App() {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Home} />
			<Route exact path='/casino' component={Casino} />
		</BrowserRouter>
	);
}

export default App;
