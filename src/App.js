import logo from './logo.svg';
import './App.css';
import LogoHeader from './component/LogoHeader';
import Navbar from './component/Navbar';
import MyCarousel from './component/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyGrid from './component/Stack';
import MyStack from './component/Stack';
import Events from './component/Text';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './component/Footer';

function App() {
  

  return (
    <div className="app-container">
      <header className="app-header">
        <LogoHeader />
        <Navbar />
        <MyCarousel  />
        <Events/>
        <MyStack />
        <hr style={{ border: "1px solid black",
        width: "90%", 
        marginLeft: "auto", 
        marginRight: "auto", 
        marginTop:"10%"
      }} />
      <Footer/>
        
      </header>
    </div>
  );
}



export default App;
