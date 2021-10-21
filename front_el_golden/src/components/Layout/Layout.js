import React from 'react';
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
    return <div className="layout">
        <div className="container-layout">
            <span className="title-principal">Gerenciamento El-Golden</span>
        </div>
        {children}
    </div>
}