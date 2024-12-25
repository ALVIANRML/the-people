import logo from './logo.svg';
import './App.css';
import MyButton from './Button';
import LogoHeader from './component/LogoHeader';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoHeader/>
        <Navbar/>
        {/* <MyButton/> */}
      </header>
    </div>
  );
}

export default App;
