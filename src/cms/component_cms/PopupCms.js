import React, { useRef, useState } from "react";
import "../../css/PopupCMS.css";
import upload from "../../img/icon-link/upload.png";

export function MonthDropdown() {
  const months = [
    "Select Month","January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  return (
    
    <select className="modal-body" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>
      {months.map((month, index) => (
        <option key={index} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
}
export function EventType() {
  const type = [
    'Select Type','Music', 'Video', 'Shop'
  ];

  return (
    
    <select id="event-type" className="modal-body-input" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>
      {type.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}

export function Popup({ text, isOpen, onClose, title, content, genre, src, icon, textButton }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null); // State untuk menyimpan pratinjau gambar

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Memicu klik pada input file
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Membuat URL sementara untuk pratinjau
      setPreview(fileURL); // Menyimpan URL ke state
      console.log("File uploaded:", file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="background-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <b>{title}</b> Update Carousel
              </h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="popup-body">
              <div className="modal-body-cms" onClick={handleUploadClick}>
                {/* Tampilkan gambar pratinjau jika ada */}
                {preview ? (
                  <img className="img-preview" src={preview} alt="Preview" />
                ) : (
                  <>
                    <img className="img-upload" src={upload} alt="Upload icon" />
                    <p style={{textAlign:'center'}}>
                      Upload img carousel
                      <br />
                      1440 x 563
                      <br />
                      max 10 mb
                    </p>
                  </>
                )}
              </div>
              {/* Input file tersembunyi */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
              <button className="save-button">Save</button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function PopupUpdateCalender({ text, isOpen, onClose, title, content, genre, src, icon, textButton }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null); // State untuk menyimpan pratinjau gambar

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Memicu klik pada input file
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Membuat URL sementara untuk pratinjau
      setPreview(fileURL); // Menyimpan URL ke state
      console.log("File uploaded:", file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="background-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <b>{title}</b> Update Calender
              </h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="popup-body">
            <MonthDropdown />
              <div className="modal-body-cms-calender" style={{}} onClick={handleUploadClick}>
                {/* Tampilkan gambar pratinjau jika ada */}
                {preview ? (
                  <img className="img-preview" src={preview} alt="Preview" />
                ) : (
                  <>
                    <img className="img-upload" src={upload} alt="Upload icon" />
                    <p style={{textAlign:'center'}}>
                      Upload img calender
                      <br />
                      1440 x 563
                      <br />
                      max 10 mb
                    </p>
                  </>
                )}
              </div>
              {/* Input file tersembunyi */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
              <button className="save-button">Save</button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PopupUpdateEvent({ text, isOpen, onClose, title, content, genre, src, icon, textButton }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null); // State untuk menyimpan pratinjau gambar

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Memicu klik pada input file
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Membuat URL sementara untuk pratinjau
      setPreview(fileURL); // Menyimpan URL ke state
      console.log("File uploaded:", file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="background-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <b>{title}</b> Update Carousel
              </h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="popup-body" >
            <div className="modal-body-cms" style={{backgroundColor:'transparent', justifyContent:"unset", alignItems:'unset', justifyContent:"right"}}>
            
            <label style={{color:"black"}} id="event_name">Event Name</label>
            <input type="text" id="event-name" className="modal-body-input" style={{color:'black',backgroundColor:'white', border:'1px solid black'}} name="event_name" placeholder="Enter Event Name"></input>
            
            <label id="event_date" style={{color:"black"}}>Add Event Date</label>
            <input type="date" name="event_date"className="modal-body-input" style={{color:'black',backgroundColor:'white', border:'1px solid black'}} ></input>
            
            <label id="event-type" style={{color:"black"}}>Event Type</label>
            <EventType/>
            
            <label style={{color:"black"}}>Event Link</label>
            <input type="text" id="event-name" className="modal-body-input" style={{color:'black',backgroundColor:'white', border:'1px solid black'}} name="event_type" placeholder="Enter Event LINK"></input>
            
            </div>
              <button className="save-button">Save</button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
