import './Home.css'
import logo from './image/logo.svg'


function Home() {

    <>

    <div className="NavBar"></div>

        <img src={logo}></img>

      <div className="BoxLogin">
       
          <h1>Bem Vindo de volta</h1>
          <p id="text">Insira seu email e senha</p>
        
        
          <input  placeholder="Email" id="email" ></input>

            <br></br>

          <input placeholder="Password" id="password" ></input>

            <br></br>

           

          <p id="textsecund">Forget your password? Click here</p>
          </div>

          </>
        
        
}
export default Home;