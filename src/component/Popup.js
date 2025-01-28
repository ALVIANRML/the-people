import React from "react";
import '../css/Popup.css';
import spotify from '../img/icon-link/spotify.png';
import youtube from '../img/icon-link/youtube.png';
import tokped from '../img/icon-link/tokped.png';


export function Popup({ isOpen, onClose, items, title, message }) {
  if (!isOpen) return null;

  // Function to determine the image based on eventType
  const getEventImage = (eventType) => {
    switch (eventType) {
      case 'Music':
        return spotify;
      case 'Shop':
        return tokped;
      case 'Video':
        return youtube;
      default:
        return null; // Handle other cases if needed
    }
  };
  const getTextButton = (eventType) => {
    switch (eventType) {
      case 'Music':
        return "Checkout Our Playlist";
      case 'Shop':
        return "Checkout Our Brand";
      case 'Video':
        return "Checkout Our Video";
      default:
        return null; // Handle other cases if needed
    }
  };

  
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
              <h5 className="modal-title">
                <b>{title}</b>
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="popup-body">
              {items.length > 0 ? (
                items.map((item) => (
                  <div className="modal-body" key={item.id}>
                    <div className="category">
                      <p style={{ fontWeight: 'bold', fontSize: '24px' }}>
                        {item.eventType}
                      </p>
                      <p>{item.eventName}</p>
                    </div>
                    <a
                      href={item.eventLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-link"
                    >
                      <p className="text-link">{getTextButton(item.eventType)} </p>
                      <img className="img-link" src={getEventImage(item.eventType)} alt={item.eventType} />
                    </a>
                  </div>
                ))
              ) : (
                <div className="modal-body">
              <div className="category">
              <p style={{ fontWeight: 'bold', fontSize:'30px', textAlign: 'center' }}>{message}</p>
               
              </div>
              
            </div>
              )}
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
