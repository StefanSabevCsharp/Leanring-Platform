import React from 'react';
import './confirmModal.css'; 

export default function ConfirmModal({ onConfirm, onCancel, message }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p className="modal-message">{message}</p>
                <div className="modal-button-container">
                    <button onClick={onCancel} className="cancel-button">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="confirm-button">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
