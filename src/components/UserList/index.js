import React, { useState } from 'react';
import PropertyUtils from '../../utils/PropertyUtils';

import './style.less';
import ConfirmDialog from '../ConfirmDialog';

export default function ListUser(props){
    const {users, deleteUser} = props;
    const [confirm, setConfirm] = useState(false);
    const [user, setUser] = useState(false);

    function openModal(user){
        setConfirm(true);
        setUser(user);
    }

    return (
        <div className="user-list">
            <div className="user-list-header">
                <span className="user-list-title">Users</span>
                <span className="user-list-bar"></span>
                <input type="text" className="user-list-search" placeholder="Filter table content"/>
            </div>
            <table className="table">
                <thead>
                    <tr className="header-row">
                        <th className="header-cell">Username</th>
                        <th className="header-cell">Name</th>
                        <th className="header-cell">E-mail</th>
                        <th className="header-cell">City</th>
                        <th className="header-cell">Ride in group</th>
                        <th className="header-cell">Day of the week</th>
                        <th className="header-cell">Posts</th>
                        <th className="header-cell">Albums</th>
                        <th className="header-cell">Photos</th>
                        <th className="header-cell trash"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="table-row">
                            <td className="cell-standard">{user.username}</td>
                            <td className="cell-standard">{user.name}</td>
                            <td className="cell-standard">
                                <a className="email" href={`mailto:${user.email}`}>{user.email}</a> 
                            </td>
                            <td className="cell-standard green">{PropertyUtils.getValue(user, 'address.city')}</td>
                            <td className="cell-standard">{user.rideInGroup}</td>
                            <td className="cell-standard">{user.dayOfTheWeek}</td>
                            <td className="cell-standard green">{user.posts}</td>
                            <td className="cell-standard green">{user.albums}</td>
                            <td className="cell-standard">{user.photos}</td>
                            <td className="cell-standard" onClick={() => openModal(user)}>
                                <i className="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ConfirmDialog open={confirm} callback={deleteUser} closeModal={() => setConfirm(false)} user={user}/>
        </div>
    )
}