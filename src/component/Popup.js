  import React from "react";
  import '../css/Popup.css'

  export function Popup({ isOpen, onClose, title, content, genre, src, icon,textButton }) {
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
              <p className="date-popup">Friday, 12 January 2025</p>
              <div className="modal-body">
                <div className="category">
                <p style={{ fontWeight: 'bold', fontSize:'30px' }}>{genre}</p>
                  {content}
                </div>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  <p className="text-link">{textButton}</p>
                  <img src={icon} alt="Tokopedia" className="img-link" />
                </a>

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

