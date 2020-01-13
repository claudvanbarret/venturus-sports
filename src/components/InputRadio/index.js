import React from 'react';

import './style.less'; 

export default function InputRadio(props){
    return (
        <div className="input-radio" >
            <input type="radio" 
                name={props.name} 
                id={props.id} 
                value={props.value} 
                onChange={props.onChange}
                required={props.required}/>
            <label htmlFor={props.id}>{props.value}</label>
        </div>
    );
}