import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Features from './components/features';
import Homepage from './components/homepage';
import Pricing from './components/pricing';
import Stories from './components/stories';

class App extends React.Component {
	render () {
		return (
			<div className='app-outside-container'>
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route exact path='/features'>
						<Features />
					</Route>
					<Route exact path='/pricing'>
						<Pricing />
					</Route>
					<Route exact path='/stories'>
						<Stories />
					</Route>
					<Route>
						<Homepage />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;