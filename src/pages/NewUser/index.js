import React, { Component } from 'react';

import FormUser from '../../components/FormUser';
import { UserConsumer } from '../../contexts/User';

import './style.less';

export default class Users extends Component {
    render(){
        return(
            <UserConsumer>
                {({ handleSubmit }) =>
                    <div className="users">
                      <FormUser handleSubmit={handleSubmit} />
                   </div>
                }
            </UserConsumer>
        );
    }
}