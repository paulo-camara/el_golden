import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
    return <div>Home

        <Link to={'/management-device'}>
            <button>MANAGEMENT DEVICE</button>
        </Link>

        <Link to={'/management-category'}>
            <button>MANAGEMENT CATEGORY</button>
        </Link>
    </div>
};