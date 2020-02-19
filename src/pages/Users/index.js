import React, { Component } from 'react';

import UserList from '../../components/UserList';
import BarInfo from '../../components/BarInfo';

import './style.less';

export default class Users extends Component {
    render() {
        return (
            <>
                <BarInfo/>
                <UserList/>
            </>
        );
    }
}