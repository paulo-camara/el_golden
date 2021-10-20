import React from 'react';
import { Link } from "react-router-dom";

export const ManagementDevice = () => {
    return <div>Management device

        <Link to={'/home'}>
            <button>HOME</button>
        </Link>
    </div>
};