import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "components/Store/Context";
import "./Additen.css";
import logoHeader from "image/logoHeader.svg";
import add from "image/add.svg";
import addtwo from "image/addtwo.svg";

const Additen = () => {
  const { setToken } = useContext(StoreContext);

  return (
    <div className="pages-home">
      <img src={logoHeader} className="Logosecund" alt=""></img>
      <hr className="line"></hr>
      <div className="Calendario">
        <p>Adicione a data de preferência</p>
        <input type="date" className="date"></input>
        <br></br>
        <a href="/">Essa data está disponível</a>
        <br></br>
        <button className="Add">Criar uma nova reunião</button>
      </div>

      <div className="add">
        <img src={add} id="add" alt=""></img>

        <p id="addp">Adicionar nova reunião</p>

        <p className="label">Início da reunião</p>
        <input type="time" className="time"></input>

        <p className="label">Término da reunião</p>
        <input type="time" className="time"></input>

        <br></br>

        <label className="label">Nome da reunião</label>
        <br></br>
        <input type="text" className="input"></input>

        <br></br>

        <label className="label">Quantidade de pessoas</label>
        <br></br>
        <input type="number" className="input"></input>
        <br></br>
        


        <img src={addtwo} id="more" alt=""></img>
        <Link to="/Additen">
          <a href="./Additens" className="a">
            Adicionar itens para reunião
          </a>
        </Link>

        <br></br>

        <button className="btnadd">Adicionar</button>
        <button className="btncan">Cancelar</button>

        <br></br>
      </div>
      <button className="btnSair" type="button" onClick={() => setToken(null)}>
        Sair
      </button>
    </div>
  );
};

export default Additen;
