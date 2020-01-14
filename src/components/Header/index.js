import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import './style.less';

export default function Header() {
    const [userInfo, setUserInfo] = useState({});
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

    function getInitials(name){
        const names = name.split(' ');
        let initials = '';
        names.forEach(n => {
            initials += n.charAt(0);
        });

        return initials.slice(0, 2).toUpperCase();
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
        let info = getUserInfo();
        info.initials = getInitials(info.name);
        setUserInfo(info);

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
                    <span className="initials">{userInfo.initials}</span>
                    <span className="name">{userInfo.name}</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                { showMenu ?
                    <div ref={wrapperRef} className="user-menu">
                        {userInfo.menuItems.map((menuItem, key) => (
                            <Link to="" key={key} className="menu-item">{menuItem}</Link>
                        ))}
                        <a className="menu-item divider">Log out</a>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}