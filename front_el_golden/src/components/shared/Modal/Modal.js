import React from 'react';
import { Button } from '../Button/Button';

export const Modal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    return isOpen && <div className="modal-container">
        <div className="modal">
            <div className="header-modal">
                {title}
            </div>
            <div className="message-modal">
                {message}
            </div>

            <div className="actions">
                <Button color={"#d02d2d"} title="Cancelar" onClick={onCancel} />
                <Button title="Confirmar" onClick={onConfirm} />
            </div>
        </div>
    </div>
};