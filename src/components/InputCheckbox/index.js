import React from 'react';

import './style.less'; 

export default function InputCheckbox(props){
    return (
        <div className="input-checkbox" >
            <input type="checkbox" 
                    name={props.name} 
                    id={props.id} 
                    value={props.value} 
                    checked={props.checked} 
                    onChange={props.onChange}/>
            <label htmlFor={props.id}>{props.value}</label>
        </div>
    );
}