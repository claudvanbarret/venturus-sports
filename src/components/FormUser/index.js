import React, { useState, Component } from 'react';

import InputText from '../InputText';
import InputRadio from '../InputRadio';
import InputCheckbox from '../InputCheckbox';
import PropertyUtils from '../../utils/PropertyUtils';

import './style.less';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default class FormUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: {
                daysOfTheWeek: []
            }
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleChange({ target : { value, name }}) {
        const { user } = this.state;
        PropertyUtils.setValue(user, name, value)
        this.setState({user});
    }
    
    handleCheckboxChange({ target : { value, name, checked }}) {
        const { user } = this.state;
        let daysOfTheWeek = user.daysOfTheWeek;
        
        if(checked) {
            daysOfTheWeek.push(value);
        } else {
            let index = daysOfTheWeek.indexOf(value);
            daysOfTheWeek.splice(index, 1);
        }
        
        user[name] = daysOfTheWeek;
        
        this.setState({
            user
        });
    }

    onSubmit(event){
        event.preventDefault();
        const { user } = this.state;
        this.props.handleSubmit(user);
    }

    render(){
        const { user } = this.state;
        const {onSubmit} = this.props;
        return (
            <div className="form-user">
                <form name="formUser" onSubmit={this.onSubmit}>
                    <div className="inputs">
                        <InputText name="username" label="Username" value={user.username} onChange={this.handleChange}/>
                        <InputText name="name" label="Name" value={user.name} onChange={this.handleChange} />
                        <InputText name="email" label="Email" type="email" value={user.email} onChange={this.handleChange} />
                        <div className="form-actions">
                            <button type="submit" className="btn btn-save">Save</button>
                            <button className="btn btn-discard">Discard</button>
                        </div>
                    </div>
                    <div className="inputs">
                        <InputText name="address.city" label="City" optional="true" value={PropertyUtils.getValue(user, 'address.city')} onChange={this.handleChange} />
                        <div className="form-group">
                            <label className="label">Ride in group?</label>
                            <div className="fields">
                                <InputRadio name="rideInGroup" value="Always" id="always" onChange={this.handleChange} />
                                <InputRadio name="rideInGroup" value="Sometimes" id="sometimes"/>
                                <InputRadio name="rideInGroup" value="Never" id="never"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label">Days of the week</label>
                            <div className="fields">
                                {DAYS.map((day) => {
                                    return <InputCheckbox name="daysOfTheWeek" 
                                            key={day}
                                            value={day} 
                                            id={day} 
                                            checked={user.daysOfTheWeek.includes(day)}
                                            onChange={this.handleCheckboxChange} />
                                })}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}