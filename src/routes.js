import Users from './pages/Users';
import NewUser from './pages/NewUser';

const routes = [
    { path: "/users", name: "Users", Component: Users, exact: true },
    { path: "/users/new", name: "New User", Component: NewUser },
];

export default routes;