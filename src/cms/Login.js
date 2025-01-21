import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { API_URL } from "../api";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import logo from '../img/the_people_logo_2_top 2 copy.png';
import '../css/Login.css';

function App() {
  const [username, setUsername] = useState(""); // Untuk menyimpan username
  const [password, setPassword] = useState(""); // Untuk menyimpan password
  const [message, setMessage] = useState("");   // Untuk pesan respons
  const navigate = useNavigate();              // Untuk navigasi ke halaman lain

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Simpan token
        setMessage(response.data.message); // Pesan sukses
        navigate(response.data.redirectTo); // Arahkan ke /dashboard
      }
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Server error"
      ); // Pesan error
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6' style={{ overflow: 'hidden' }}>
          <div className='d-flex flex-row ps-0 pe-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            <span className="h1 fw-bold mb-0">
              <img className='logo-login' src={logo} alt="Logo" />
            </span>
          </div>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              label='Username'
              id='username'
              type='text'
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              label='Password'
              id='password'
              type='password'
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="mb-4 px-5 mx-5 w-100"
              style={{
                backgroundColor: '#17a2b8',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
            {message && (
              <p className="ms-5" style={{ color: message === "Login successful" ? "green" : "red" }}>
                {message}
              </p>
            )}
            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted" href="#!">Forgot password?</a>
            </p>
            <p className='ms-5'>
              Don't have an account? <a href="#!" className="link-info">Register here</a>
            </p>
          </div>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img
            src="https://i.pinimg.com/1200x/59/47/33/5947333920d8f09737d017ecfef27b1c.jpg"
            alt="Login"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
