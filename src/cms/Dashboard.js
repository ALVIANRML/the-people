import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/Dashboard.css';
import LogoHeader from '../component/LogoHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Popup } from '../cms/component_cms/PopupCms';
import { PopupUpdateCalender } from '../cms/component_cms/PopupCms';
import { PopupUpdateEvent } from '../cms/component_cms/PopupCms';
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
        <ButtonDashboard text="Update Carousel" onClick={() => handleButtonClick('carousel')} />
        <ButtonDashboard text="Update Calendar" onClick={() => handleButtonClick('calendar')} />
        <ButtonDashboard text="Update Event" onClick={() => handleButtonClick('event')} />
      </header>

      {/* Render pop-up berdasarkan jenis yang dipilih */}
      {popupType === 'carousel' && <Popup isOpen={true} onClose={closePopup} />}
      {popupType === 'calendar' && <PopupUpdateCalender isOpen={true} onClose={closePopup} />}
      {popupType === 'event' && <PopupUpdateEvent isOpen={true} onClose={closePopup} />}
    </div>
  );
}

export default Dashboard;
