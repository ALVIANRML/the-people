import Figure from 'react-bootstrap/Figure';
import React, { useState } from 'react';
import '../css/Figura.css'

import january from'../img/january/january.png'
import february from'../img/february/february.png'
import march from'../img/march/march.png'
import april from'../img/april/april.png'
import may from'../img/may/may.png'
import june from'../img/june/june.png'
import july from'../img/july/july.png'
import august from'../img/august/august.png'
import september from'../img/september/september.png'
import october from'../img/october/october.png'
import november from'../img/november/november.png'
import december from'../img/december/december.png'
import youtube from '../../src/img/icon-link/youtube.png'
import tokped from '../../src/img/icon-link/tokped.png'
import spotify from '../../src/img/icon-link/spotify.png'
import { Popup } from "./Popup";
import { PopupComingSoon } from "./PopupComingsoon";

export function January() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "https://open.spotify.com/playlist/2yU2fJR5X05fzWArc18JBn?si=RIeaDx6vQwiQJ2Hi6xPz7w&pi=a-mZZcvveFSJ6n",
    content: "Sound for The Peole January : RUB WHILE YOU CAN",
    genre: "Music",
    icon: spotify,
    textButton: "Check Our Playlist",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={january} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
            icon={popupData.icon}
            textButton={popupData.textButton}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in February 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}


export function February() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={february} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in February 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}



export function March() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={march} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in March 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}




export function April() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={april} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in April 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}




export function May() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={may} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in May 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}


export function June() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={june} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in June 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}


export function July() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in July 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={july} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in July 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}


export function August() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={august} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in August 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}


export function September() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={september} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in September 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}



export function October() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={october} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in October 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}

export function November() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={november} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in November 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}


export function December() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Data untuk popup
  const popupData = {
    title: "What's new in January 2025",
    src: "",
    content: "",
    genre: "",
    message:"COMING SOON",
  };

  const isDataComplete = popupData.title && popupData.src && popupData.content && popupData.genre;

  const handleOpenPopup = () => {
    setPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div className={isPopupOpen ? "main-content blur" : "main-content"}>
        <Figure className="Figure" onClick={handleOpenPopup}>
          <Figure.Image alt="171x180" src={december} />
        </Figure>
      </div>

      {isPopupOpen && (
        isDataComplete ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title={popupData.title}
            src={popupData.src}
            content={popupData.content}
            genre={popupData.genre}
          />
        ) : (
          <PopupComingSoon
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            title= "What's new in December 2025"
            message="Content is coming soon!"
          />
        )
      )}
    </div>
  );
}

