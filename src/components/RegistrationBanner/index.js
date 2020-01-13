import React from 'react';

import './style.less';

export default function RegistrationBanner() {
    const banners = [
        {
            title: 'Need help?',
            icon: 'far fa-life-ring',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Why register?',
            icon: 'fas fa-heartbeat',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'What people are saying...',
            icon: 'far fa-smile',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];

    return (
        <div className="registration-banner">
            <div className="registration-header">
                <span className="title">Registration</span>
                <span className="bar"></span>
            </div>
            <div className="banners">
                {banners.map(({ title, icon, description}, key) => (
                    <div className="banner-item" key={key}>
                        <div className="banner-title">{title}</div>
                        <div className="banner-body">
                            <i className={icon}></i>
                            <p className="banner-description">{description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}