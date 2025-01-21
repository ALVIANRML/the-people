import React from "react";
import '../../src/css/Navbar.css';


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-item">ABOUT</div>
        <div className="navbar-item"><a 
          href="https://open.spotify.com/user/31ewql24f6l42h4oxylfkj2nbvtm?si=wKiePhb7SSeyALeVogn-QQ&nd=1&dlsi=1672a923ddfe44de"  
          style={{ color: "inherit", textDecoration: "none" }} 
          target="_blank" 
          rel="noopener noreferrer">
          MUSIC
        </a></div>
        <div className="navbar-item">
        <a 
          href="https://www.tokopedia.com/theclassicone?utm_campaign=Shop-19353104-11817084-170125-contextual_image-halaman_toko-LSfHao&utm_source=salinlink&utm_medium=share&_branch_match_id=1397875793473131541&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWLylNS8%2FOrSxODUyyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAe9Ii3jwAAAA%3D"  
          style={{ color: "inherit", textDecoration: "none" }} 
          target="_blank" 
          rel="noopener noreferrer">
          SHOP
        </a>
      </div>
    </div>
    );
  };
  
  export default Navbar;