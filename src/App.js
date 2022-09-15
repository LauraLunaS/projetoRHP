import { useState } from "react";
import  'react-router-dom'
import logo from './image/logo.svg';
import './App.css';
import './BoxLogin.css'
import Button from './Button'
import './index'
import './Calendar'
import { Input } from 'reactstrap';
import { Link } from "react-router-dom";
import InputEmail from "./Login/InputEmail";
import InputPassword from "./Login/InputPassword";


function App() { 


  return (
  
    <div className="App">
        
        <div className="NavBar"></div>

          <img src={logo} className="Logo" align="center"></img>

            <div className="BoxLogin" align="center">
       
              <h1>Welcome to back</h1>
              <p id="text">Insert your email and password</p>
    

              < InputEmail />

              < InputPassword />

              <br></br>

              
              < Button />

              <br></br>

              <a href=''>Forget your password? Click Here</a>
          
        </div>
 
      
      </div>
  );
}



export default App;
