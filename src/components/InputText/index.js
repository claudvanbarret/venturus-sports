import React from 'react';

import './style.less';

export default function InputText(props){
    return (
        <div className="input-text">
            <div className="input-label">
                <label htmlFor={props.name}>{props.label}</label>
                {props.optional ? <span className="optional">optional</span> : null}
            </div>
            <input type={props.type ? props.type : 'text'} name={props.name} value={props.value} onChange={props.onChange}/>
            <span className="field-instruction">Instructions to show on input focus.</span>
        </div>
    );
}