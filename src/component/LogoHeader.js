import '../../src/css/Logo.css';
import gambar from'../../src/the_people_logo_2_top.png'

function LogoHeader() {
  return (
    <div className="logo-container">
      <img src={gambar} alt="logo the people" className="logo" />
    </div>
  );
}

export default LogoHeader;
