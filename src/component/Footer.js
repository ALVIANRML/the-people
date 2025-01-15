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
          <li>Music</li>
          <li>About</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Social</h3>
        <ul>
        <li>
            <a href="https://www.instagram.com/your_instagram_account" style={{color:"gray"}} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/user/your_spotify_account"  style={{color:"gray"}} target="_blank" rel="noopener noreferrer">
              Spotify
            </a>
          </li>
          <li>
            <a href="https://www.tokopedia.com/your_tokopedia_store"  style={{color:"gray"}} target="_blank" rel="noopener noreferrer">
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
