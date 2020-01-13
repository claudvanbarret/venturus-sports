import React, { Component } from 'react';

import FormUser from '../../components/FormUser';
import { UserConsumer } from '../../contexts/User';
import RegistrationBanner from '../../components/RegistrationBanner';

import './style.less';

export default class Users extends Component {
    render(){
        return(
            <UserConsumer>
                {({ handleSubmit }) =>
                    <>
                        <RegistrationBanner/>
                        <div className="new-user">
                            <FormUser handleSubmit={handleSubmit} />
                    </div>
                   </>
                }
            </UserConsumer>
        );
    }
}