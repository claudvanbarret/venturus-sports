import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import routes from './routes';
import { UserProvider } from './contexts/User';
import Breadcrumb from './components/Breadcrumb';

import './main.less';

export default function App() {
	return (
		<UserProvider>
			<HashRouter>
			<Breadcrumb>
				{routes.map(({path, name}, key) => (
					<Link to={path} key={key}>
						{name}
					</Link>
				))}
			</Breadcrumb>
				<Switch>
					{routes.map(({path, exact, Component}, key) => (
						<Route path={path} key={key} exact={exact} component={Component}></Route>
					))}
				</Switch>
			</HashRouter>
		</UserProvider>
	)
}