import React from 'react';
import { Link } from "react-router-dom";

import routes from '../../routes';
import './style.less';

export default function Breadcrumb() {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb-content">
                <i className="fas fa-home"></i>
                {routes.map(({ path, name }, key) => (
                    <div className="route" key={key}>
                        <Link to={path}>
                            {name}
                        </Link>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                ))}
            </div>
        </div>
    );
}

