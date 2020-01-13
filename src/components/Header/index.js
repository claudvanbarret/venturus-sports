import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import './style.less';

export default function Header() {
    const [userInfo, setUserInfo] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const wrapperRef = useRef(null);

    function getUserInfo(){
        return {
            name: 'Jason Bourne',
            menuItems: [
                'Friend List',
                'Saved Items',
                'Notifications',
                'User Preferences'
            ]
        }
    }

    function escFunction(event) {
        if(event.key === 'Escape') {
            setShowMenu(false);
        }
    }

    function handleClickOutside(event){
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    } 

    useEffect(() => {
        setUserInfo(getUserInfo);

        document.addEventListener("keydown", escFunction);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", escFunction);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div className="header-logo">
                <div className="logo">
                    <i className="fas fa-question"></i>
                </div>
                <h2 className="header-title">Venturus Sports</h2>
            </div>
            <div className="header-dropdown-menu">
                <div className="user-info" onClick={() => setShowMenu(true)}>
                    <span className="name">{userInfo.name}</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                { showMenu ?
                    <div ref={wrapperRef} className="user-menu">
                        {userInfo.menuItems.map((menuItem, key) => (
                            <Link to="" key={key} className="menu-item">{menuItem}</Link>
                        ))}
                        {/* <li className="menu-item">Friend List</li>
                        <li className="menu-item">Saved Items</li>
                        <li className="menu-item">Notifications</li>
                        <li className="menu-item">User Preferences</li> */}
                        <a className="menu-item divider">Log out</a>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}