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

/*
  "data": "12/08/2000",
        "local": "reuniaoteste",
        "quantidade": 4,
        "nome":"eu",
        "emal":"yurikk",
        "horarioInicio": "19:55",
        "horarioFinal": "16:00",
        "criadorDoEvento":"Yuri"
        "inscritos":" "
       */

  const Modeloreuniao = {
    id: 0,
    nome: "",
    data: "",
    local:" ",
   horarioInicio: "",
    horarioFinal: "",
    quantidade: "",
    email:"",
    criadorDoEvento:"",
    
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
    fetch("http://localhost:8080/evento/cadastrar", {
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
        alert  ('Reuniao cadastrada com sucesso! ,  IdReuniao = '+ retorno_convertido.id)
       
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
            value={reuniao.data}
            onChange={aoDigitar}
            name="data"
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
          value={reuniao.horarioInicio}
          onChange={aoDigitar}
          name="horarioInicio"
        ></input>

        <p className="label">Término da reunião</p>
        <input
          type="time"
          className="time"
          value={reuniao.horarioFinal}
          onChange={aoDigitar}
          name="horarioFinal"
        ></input>

        <br></br>

        <label className="label">Nome da Sala</label>
        <br></br>
        <input
          type="text"
          className="input"
          value={reuniao.local}
          onChange={aoDigitar}
          name="local"
        ></input>

        <br></br>

        <label className="label">Quantidade de pessoas</label>
        <br></br>
        <input
          type="number"
          className="input"
          value={reuniao.quantidade}
          onChange={aoDigitar}
          min="2"
          name="quantidade"
        ></input>

        <br></br>

        <img src={addtwo} id="more" alt=""></img>
        <Link to="">
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















