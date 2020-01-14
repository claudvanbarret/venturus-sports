import React, { Component } from 'react';

import UserList from '../../components/UserList';
import { UserConsumer } from '../../contexts/User';

import './style.less';
import BarInfo from '../../components/BarInfo';

export default class Users extends Component {
    render() {
        return (
            <UserConsumer>
                {({ users, deleteUser, filterUsers }) => 
                    <>
                        <BarInfo/>
                        <UserList users={users} deleteUser={deleteUser} filterUsers={filterUsers}/>
                    </>
                }
            </UserConsumer>
        );
    }
}