import React from 'react';

export const Button = ({ title, onClick, color = '#1f7ac9' }) => {
    return <button
        style={{ backgroundColor: color }}
        onClick={onClick}
        className="button">
        {title}
    </button>
};