import React, { useRef, useState, useEffect } from "react";
import "../../css/PopupCMS.css";
import upload from "../../img/icon-link/upload.png";
import axios from "axios";
import { API_URL } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
    
    <select id="event_type" name="event_type" className="modal-body-input" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>
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
  const [imageBase64, setImageBase64] = useState(null); // State untuk menyimpan gambar dalam format base64

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Memicu klik pada input file
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Membuat URL sementara untuk pratinjau
      setPreview(fileURL); // Menyimpan URL ke state

      // Mengonversi gambar ke Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1]; // Ambil bagian Base64
        setImageBase64(base64String); // Menyimpan gambar dalam Base64
      };
      reader.readAsDataURL(file); // Membaca gambar sebagai Data URL
    }
  };

  const handleSave = async () => {
    if (imageBase64) {
      try {
        const response = await axios.post(
          `${API_URL}/upload-image`,
          { image: imageBase64 },
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log("Image uploaded successfully", response.data);
        onClose();
      } catch (error) {
        if (error.response) {
          // Server memberikan respons error (misalnya 4xx atau 5xx)
          console.error("Error response:", error.response.data);
          console.error("Error status:", error.response.status);
        } else if (error.request) {
          // Permintaan dikirim, tetapi tidak ada respons
          console.error("Error request:", error.request);
        } else {
          // Kesalahan lainnya
          console.error("Error message:", error.message);
        }
      }
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
                    <p style={{ textAlign: 'center' }}>
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
                name="imageData"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
              />
              {/* Tombol Save yang akan mengirim gambar ke server */}
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function PopupAddCalender({ text, isOpen, onClose, title, content, genre, src, icon, textButton }) {
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

export function PopupAddEvent({ text, isOpen, onClose, title, content, genre, src, icon, textButton }) {
  if (!isOpen) return null;

  const handleSave = async () => {
    const dataToSend = {
      eventName: document.getElementById("event-name").value,
      eventDate: document.querySelector("input[name='event_date']").value,
      eventType: document.querySelector("select[name='event_type']").value,
      eventLink: document.getElementById("event-link").value,
    };

    try {
      const response = await axios.post(`${API_URL}/save-event`, dataToSend);
      console.log("Response from server:", response.data);
      console.log("Data saved successfully!");

    // Show success toast
    toast.success("Data saved successfully!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
      onClose();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

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
              <div className="modal-body-cms" style={{ backgroundColor: 'transparent', justifyContent: "unset", alignItems: 'unset', justifyContent: "right" }}>
                <label style={{ color: "black" }} id="event_name">Event Name</label>
                <input
                  type="text"
                  id="event-name"
                  className="modal-body-input"
                  style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}
                  name="event_name"
                  placeholder="Enter Event Name"
                />

                <label id="event_date" style={{ color: "black" }}>Add Event Date</label>
                <input
                  type="date"
                  name="event_date"
                  className="modal-body-input"
                  style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}
                />

                <label id="event-type" style={{ color: "black" }}>Event Type</label>
                <EventType />

                <label style={{ color: "black" }}>Event Link</label>
                <input
                  type="text"
                  id="event-link"
                  className="modal-body-input"
                  style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}
                  name="event_link"
                  placeholder="Enter Event LINK"
                />
              </div>
              <button className="save-button" onClick={handleSave}>Save</button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function PopupUpdateCarousel({ text, isOpen, onClose, title, content, genre, src, icon, textButton }) {
  const [images, setImages] = useState([]); // State untuk menyimpan data gambar
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menangkap error
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-all-images`);
        console.log("API Response:", response.data); // Log data API

        // Pastikan data berbentuk array
        if (Array.isArray(response.data)) {
          setImages(response.data); // Simpan data gambar ke state               
        } else {
          throw new Error("Invalid response format"); // Jika format tidak sesuai
        }
      } catch (error) {
        setError(error.message || "Error fetching images");
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); // Set loading selesai
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try{
      const response = await axios.delete(`${API_URL}/delete-image/${id}`);
      setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    }catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image!");
    }
  }
  if (loading) {
    return <div>Loading...</div>; // Tampilkan indikator loading
  }

  if (error) {
    return <div>Error: {error}</div>; // Tampilkan pesan error
  }


  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="background-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <b>{title}</b> Add Carousel
              </h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="popup-body">
            {
              images.length > 0 ? (
                images.map((image) => (
                  <div key={image.id}> 
                   <img src={image.image} style={{ width: "100%", height: "auto" }} alt={`Image ${image.id}`} />
                    <button className="save-button" id={image.id} style={{backgroundColor:'red', marginBottom:'10vh'}} >Delete</button>
                  </div>
                ))
              ) : (
                <div>No images available</div>
              )
            }
            </div>
                
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function PopupUpdateEvent({ text, isOpen, onClose, title, content, genre, src, icon, textButton }) {
  if (!isOpen) return null;

  const handleSave = async () => {
    const dataToSend = {
      eventName: document.getElementById("event-name").value,
      eventDate: document.querySelector("input[name='event_date']").value,
      eventType: document.querySelector("select[name='event_type']").value,
      eventLink: document.getElementById("event-link").value,
    };

    try {
      const response = await axios.post(`${API_URL}/save-event`, dataToSend);
      console.log("Response from server:", response.data);
      console.log("Data saved successfully!");

    // Show success toast
    toast.success("Data saved successfully!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
      onClose();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

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
              <div className="modal-body-cms" style={{ backgroundColor: 'transparent', justifyContent: "unset", alignItems: 'unset', justifyContent: "right" }}>
                <label style={{ color: "black" }} id="event_name">Event Name</label>
                <input
                  type="text"
                  id="event-name"
                  className="modal-body-input"
                  style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}
                  name="event_name"
                  placeholder="Enter Event Name"
                />

                <label id="event_date" style={{ color: "black" }}>Add Event Date</label>
                <input
                  type="date"
                  name="event_date"
                  className="modal-body-input"
                  style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}
                />

                <label id="event-type" style={{ color: "black" }}>Event Type</label>
                <EventType />

                <label style={{ color: "black" }}>Event Link</label>
                <input
                  type="text"
                  id="event-link"
                  className="modal-body-input"
                  style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}
                  name="event_link"
                  placeholder="Enter Event LINK"
                />
              </div>
              <button className="save-button" onClick={handleSave}>Save</button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
