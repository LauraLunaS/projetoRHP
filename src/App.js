import logo from './logo.svg'
import email from './email.svg'
import password from './password.svg'
import './App.css';
import './BoxLogin.css';


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

          <button className="SignIn">Sign In</button>

          <p id="textsecund">Forget your password? Click here</p>
          </div>
        

    
    </div>
  );
}



export default App;
