import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import routes from './routes';

import store from './store';

import './main.less';

export default function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<Header/>
				<Breadcrumb/>
				<Switch>
					<Redirect exact from="/" to="/users" />
					{routes.map(({path, exact, Component}, key) => (
						<Route path={path} key={key} exact={exact} component={Component}></Route>
					))}
				</Switch>
			</HashRouter>
		</Provider>
	)
}