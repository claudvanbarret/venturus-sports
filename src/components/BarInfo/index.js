import React from 'react';

import './style.less';

export default function BarInfo() {
    const infos = [
        {
            title: 'Sport type',
            icon: 'fas fa-puzzle-piece',
            description: 'Cycling'
        },
        {
            title: 'Mode',
            icon: 'fas fa-trophy',
            description: 'Advanced'
        },
        {
            title: 'Route',
            icon: 'fas fa-map-signs',
            description: '30 miles'
        }
    ];
    return (
        <div className="bar-info">
            <div className="bar-list">
                {infos.map(({ title, icon, description }, key) => (
                    <div className="bar-item" key={key}>
                        <i className={icon}></i>
                        <div className="bar-body">
                            <span className="bar-title">{title}</span>
                            <span className="bar-description">{description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

