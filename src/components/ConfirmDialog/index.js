import React from 'react';

import './style.less';

export default function ConfirmDialog(props){

    function onClickOK(){
        props.callback(props.user); 
        props.closeModal();
    }

    return (
        <div id="dialog" className={ props.open ? 'open': ''}>
            <div className="dialog-content">
                <p className="dialog-title">Confirm</p>
                <p className="dialog-body">Are you sure?</p>
                <div className="dialog-actions">
                    <button className="btn btn-cancel" onClick={props.closeModal}>Cancel</button>
                    <button className="btn btn-ok" onClick={onClickOK}>OK</button>
                </div>
            </div>
        </div>
    );
}