import React from 'react';

export const Input = ({ onChange, value, placeholder, style }) => {
    return <input
        style={style}
        value={value}
        className="input-field"
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
    />
};