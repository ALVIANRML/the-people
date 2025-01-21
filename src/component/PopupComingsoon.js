import React from "react";
import youtube from '../../src/img/icon-link/youtube.png'
import tokped from '../../src/img/icon-link/tokped.png'


export function PopupComingSoon({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="background-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><b>{title}</b>  </h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="popup-body">
            <div className="modal-body">
              <div className="category">
              <p style={{ fontWeight: 'bold', fontSize:'30px', textAlign: 'center' }}>{message}</p>
               
              </div>
              
            </div>
           
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
