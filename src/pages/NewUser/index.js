import React, { Component } from 'react';

import FormUser from '../../components/FormUser';
import RegistrationBanner from '../../components/RegistrationBanner';

import './style.less';

export default class Users extends Component {
    render(){
        return(
            <>
                <RegistrationBanner/>
                <div className="new-user">
                    <FormUser />
                </div>
            </>
        );
    }
}