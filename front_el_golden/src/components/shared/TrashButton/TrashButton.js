import React from 'react';

export const TrashButton = ({ onClick }) => {
    return (
        <div className="button-trasher-container">
            <img
                className="image"
                onClick={onClick}
                src={"https://w7.pngwing.com/pngs/271/838/png-transparent-computer-icons-delete-icon-white-text-logo.png"}
            />
        </div>
    );
};