import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import { UserProvider } from './contexts/User';
import Header from './components/Header';

import './main.less';
import Breadcrumb from './components/Breadcrumb';

export default function App() {
	return (
		<UserProvider>
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
		</UserProvider>
	)
}