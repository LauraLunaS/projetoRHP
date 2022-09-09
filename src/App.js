import  'react-router-dom'
import logo from './image/logo.svg';
import './App.css';
import './BoxLogin.css'
import Button from './Button'
import './index'

function App() {

  return (
    <div className="App">
        
        <div className="NavBar"></div>

        <img src={logo}></img>

      <div className="BoxLogin">
       
          <h1>Bem Vindo de volta</h1>
          <p id="text">Insira seu email e senha</p>
        
        
          <input  placeholder="Email" id="email" ></input>

            <br></br>

          <input placeholder="Password" id="password" ></input>

            <br></br>

            < Button />

            <a href=''>Forget your password? Click Here</a>
          
          
          </div>
 
    
    </div>
  );
}



export default App;
