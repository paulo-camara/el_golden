import React from 'react';

export const Loader = ({ isLoading }) => {
    return isLoading ? <div className="loader-container">
        <div className="loading" />
    </div> : null;
};