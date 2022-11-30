import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoreContext from "components/Store/Context";
import "./Home.css";
import logoHeader from "image/logoHeader.svg";
import add from "image/add.svg";
import addtwo from "image/addtwo.svg";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);

  const SubDate = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return ano + "-" + mes + "-" + dia;
   
  };

  const Modeloreuniao = {
    idReuniao: 0,
    nomereuniao: "",
    moment: "",
    inicio_reuniao: "",
    termino_reuniao: "",
    q_pessoas: "",
  };
  const [reuniao, setReuniao] = useState([]);
  const [objReuniao, setObjReuniao] = useState(Modeloreuniao);
  const [EsconderDiv, setEsconderDiv] = useState(true);
  

  const handleClickData = () => {
    setEsconderDiv(false);
    alert(" Data Marcada com Sucesso , Adicione agora as informações da Reuniao !")
  };

  const aoDigitar = (e) => {
   
    console.log(e.target);
    setObjReuniao({ ...objReuniao, [e.target.name]: e.target.value });
    
  };

  const Cadastrar = () => {
    fetch("http://localhost:8080/reuniao/cadastrar", {
      method: "post",
      body: JSON.stringify(objReuniao),
      headers: {
        "Content-type": "application/json",
        'Accept': "application/json",
      },
    })
      
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if (retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem)
      } else {

        setReuniao([...reuniao, retorno_convertido]);
        alert('Reuniao cadastrada com sucesso! ,  IdReuniao = '+ retorno_convertido.idReuniao)
        limparFormulario()

      }
      

    })

  };

  const limparFormulario = () => {
    setObjReuniao(Modeloreuniao);
  };

  return (
    <div className="pages-home">
      <img src={logoHeader} className="Logosecund" alt=""></img>
      <hr className="line"></hr>

      
        <div className="Calendario">
          <p>Adicione a data de preferência</p>
          <input
            type="date"
            className="date"
            value={reuniao.moment}
            onChange={aoDigitar}
            name="moment"
            min={SubDate()}
          ></input>

          <br></br>
          <a href="/">Essa data está disponível</a>
          <br></br>

          <button
            className="Add"
            onClick={handleClickData}
            onAuxClick={limparFormulario}
            value="Cadastrar"
          >
            Agendar Data
          </button>
        </div>
      

      <div className="add">
        <img src={add} id="add" alt=""></img>

        <p id="addp">Adicionar nova reunião</p>

        <p className="label">Início da reunião</p>
        <input
          type="time"
          className="time"
          value={reuniao.inicio_reuniao}
          onChange={aoDigitar}
          name="inicio_reuniao"
        ></input>

        <p className="label">Término da reunião</p>
        <input
          type="time"
          className="time"
          value={reuniao.termino_reuniao}
          onChange={aoDigitar}
          name="termino_reuniao"
        ></input>

        <br></br>

        <label className="label">Nome da reunião</label>
        <br></br>
        <input
          type="text"
          className="input"
          value={reuniao.nomereuniao}
          onChange={aoDigitar}
          name="nomereuniao"
        ></input>

        <br></br>

        <label className="label">Quantidade de pessoas</label>
        <br></br>
        <input
          type="number"
          className="input"
          value={reuniao.q_pessoas}
          onChange={aoDigitar}
          min="2"
          name="q_pessoas"
        ></input>

        <br></br>

        <img src={addtwo} id="more" alt=""></img>
        <Link to="/Additen">
          <a href="./Additens" className="a">
            Adicionar itens para reunião
          </a>
        </Link>

        <button
         type="button"
          className="btnadd"
          onClick={Cadastrar}
          onAuxClick={limparFormulario}
          value="Cadastrar"
        >
          Adicionar
        </button>
        <button
          className="btncan"
          onClick={limparFormulario}
          value="limparFormulario"
        >
          Cancelar
        </button>

        <br></br>
      </div>
      <button className="btnSair" type="button" onClick={() => setToken(null)}>
        Sair
      </button>
      <Link to={"/AdmTabela"} ><button  type="button" class="btnlink">Gerenciar Reuniões</button></Link>
    </div>
  );
};

export default PagesHome;















