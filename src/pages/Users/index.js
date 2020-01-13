import React, { Component } from 'react';

import UserList from '../../components/UserList';
import { UserConsumer } from '../../contexts/User';

import './style.less';

export default class Users extends Component {
    render() {
        return (
            <UserConsumer>
                {({ users, deleteUser, filterUsers }) =>
                    <div className="users">
                        <UserList users={users} deleteUser={deleteUser} filterUsers={filterUsers}/>
                    </div>
                }
            </UserConsumer>
        );
    }
}