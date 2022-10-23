import './Home.css'
import Button from './Button'
import InputEmail from "./Login/InputEmail";
import InputPassword from "./Login/InputPassword";
import logo from './image/logo.svg';
import { Link } from "react-router-dom";
import './Table.js'


function home() {
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
    
                  <Link to='/Table'>
                    <a href='./Table' className='a'>Sou colaborador</a>
                    </Link>

                    <br></br>

                  <a href=''>Forget your password? Click Here</a>
              
            </div>
     
          
          </div>
      );

}
export default home;