import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/Dashboard.css';
import LogoHeader from '../component/LogoHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Popup } from '../cms/component_cms/PopupCms';
import { PopupAddCalender } from '../cms/component_cms/PopupCms';
import { PopupAddEvent } from '../cms/component_cms/PopupCms';
import { PopupUpdateEvent } from '../cms/component_cms/PopupCms';
import { PopupUpdateCarousel } from '../cms/component_cms/PopupCms';
import { ButtonDashboard } from './component_cms/ButtonDashboard';

function Dashboard() {
  const [popupType, setPopupType] = useState(''); // Untuk melacak jenis popup yang aktif

  const handleButtonClick = (type) => {
    setPopupType(type);
  };

  const closePopup = () => {
    setPopupType('');
  };

  // UseEffect to handle body overflow
  useEffect(() => {
    if (popupType) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [popupType]);

  return (
    <div className="app-container">
      <header className="app-header">
        <LogoHeader />

        <h2 style={{textAlign:'center', marginTop:'20vh'}}>Carousel</h2>
        <ButtonDashboard text="Add Carousel" onClick={() => handleButtonClick('carousel')} />
        <ButtonDashboard text="Update Carousel" onClick={() => handleButtonClick('update-carousel')} />

        <ButtonDashboard text="Update Calendar" onClick={() => handleButtonClick('calendar')} />


          <h2 style={{textAlign:'center', marginTop:'20vh'}}>Event</h2>
        <ButtonDashboard text="Add Event" onClick={() => handleButtonClick('event')} />
        <ButtonDashboard text="Update Event" onClick={() => handleButtonClick('update-event')} />
      </header>

      {/* Render pop-up berdasarkan jenis yang dipilih */}
      {popupType === 'carousel' && <Popup isOpen={true} onClose={closePopup} />}
      {popupType === 'update-carousel' && <PopupUpdateCarousel isOpen={true} onClose={closePopup} />}
      {popupType === 'calendar' && <PopupAddCalender isOpen={true} onClose={closePopup} />}
      {popupType === 'event' && <PopupAddEvent isOpen={true} onClose={closePopup} />}
      {popupType === 'update-event' && <PopupUpdateEvent isOpen={true} onClose={closePopup} />}
    </div>
  );
}

export default Dashboard;
