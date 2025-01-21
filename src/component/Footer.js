import React from "react";
import '../css/Footer.css'; // File CSS untuk styling
import logo from '../img/the_people_logo_2_top 2.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer-section">
        <h3>Sitemap</h3>
        <ul>
        <li>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault(); // Mencegah reload halaman
                scrollToTop(); // Panggil fungsi untuk menggulir ke atas
              }} 
              style={{ cursor: "pointer", color: "gray" }}
            >
              Home
            </a>
          </li>
          <li>Event</li>
          
        </ul>
      </div>
      <div className="footer-section">
        <h3>Social</h3>
        <ul>
        <li>
            <a href="https://www.instagram.com/_______thepeople?igsh=MWZsa2xqcmxqNTV1NA==" style={{color:"gray"}} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/user/31ewql24f6l42h4oxylfkj2nbvtm?si=wKiePhb7SSeyALeVogn-QQ&nd=1&dlsi=1672a923ddfe44de"  style={{color:"gray"}} target="_blank" rel="noopener noreferrer">
              Spotify
            </a>
          </li>
          <li>
            <a href="https://tokopedia.link/tufgkmyseQb"  style={{color:"gray"}} target="_blank" rel="noopener noreferrer">
              Tokopedia
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Phone Number</h3>
        <p>+6251827871897</p>
      </div>
      <div className="footer-section">
        <h3>Address</h3>
        <p>Jl. Darussalam blablabla</p>
      </div>
      <img 
        src={logo}
        className="logo-footer"
      />
    </div>
    
    
  );
};

export default Footer;
