import React from "react";
import youtube from '../../src/img/icon-link/youtube.png'

export function Popup({ isOpen, onClose, title, content }) {
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
            <p className="date-popup">ini aiojdioasjd</p>
            <div className="modal-body">
              <div className="category">
              <p style={{ fontWeight: 'bold', fontSize:'30px' }}>Genre</p>
                {content}
              </div>
              <button className="button-link">
                <p className="text-link">Check Our New Video</p>
                <img  src = {youtube}
                      className="img-link"
                />
              </button>
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
