import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Users from './pages/Users';
import NewUser from './pages/NewUser';
import { UserProvider } from './contexts/User';

import './main.less';

export default function Routes() {
	return (
		<UserProvider>
			<HashRouter>
				<Switch>
					<Route path="/users" exact component={Users}></Route>
					<Route path="/users/new" component={NewUser}></Route>
				</Switch>
			</HashRouter>
		</UserProvider>
	)
}