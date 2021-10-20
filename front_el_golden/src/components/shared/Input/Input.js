import React from 'react';

export const Input = ({ onChange, placeholder }) => {
    return <input
        className="input-field"
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
    />
};