import React from 'react';
import { Link } from 'react-router-dom';

export const ItemMenu = ({ icon, title, redirectTo, style }) => {
    return (
        <div className="menu-container">
            <Link to={redirectTo}>
                <div className="container-icon-item-menu">
                    <img className="icon-item-menu" src={icon} style={style} />
                </div>
                <div className="title-item">
                    <span>{title}</span>
                </div>
            </Link>
        </div>
    );
};
