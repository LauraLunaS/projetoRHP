import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoreContext from "components/Store/Context";
import "./Home.css";
import logoHeader from "image/logoHeader.svg";
import add from "image/add.svg";
import addtwo from "image/addtwo.svg";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);


  
  const SubDate=()=>{
  const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
 return  ano + '-' + mes + '-' + dia;
//console.log(dataAtual);
}


  const Modeloreuniao = {
    idReuniao: 0,
    nomereuniao: '',
    moment: '',
    inicio_reuniao: '',
    termino_reuniao: '',
    q_pessoas: '',

  }
  const [reuniao, setReuniao] = useState([]);
  const [objReuniao, setObjReuniao] = useState(Modeloreuniao);
  //const[buttondisabled,setbuttondisabled]= useState();

  const[MostrarDiv,setMostrarDiv]=useState(false);
  const[EsconderDiv,setEsconderDiv]=useState(true);
  //const[buttondisabled,setbuttondisabled]= useState();


  const handleClickData=()=>{
    setEsconderDiv(false)
    setMostrarDiv(true)
  }





  const aoDigitar = (e) => {

    /*
    if(console.log(e.target.value.trim().lenght!=0)){  // true

      setbuttondisabled(" ");

      
    
    }
    else{*/
      //setbuttondisabled();
    console.log(e.target);
    setObjReuniao({ ...objReuniao, [e.target.name]: e.target.value })
    //}
      
    }
    
   
      
      
    
  


  const Cadastrar = () => {
    fetch('http://localhost:8080/reuniao/cadastrar', {
      method: 'post',
      body: JSON.stringify(objReuniao),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {


       

          setReuniao([...reuniao, retorno_convertido]);
          alert('Reuniao cadastrada com sucesso!')
          limparFormulario()


        

      })

  }



  const limparFormulario = () => {
    setObjReuniao(Modeloreuniao);

  }


  return (
    <div className="pages-home">
      <img src={logoHeader} className="Logosecund"></img>
      <hr className="line"></hr>

      {EsconderDiv &&(<div className="Calendario">
        <p>Adicione a data de preferência</p>
        <input type="date" className="date" value={reuniao.moment} onChange={aoDigitar} name='moment' min={SubDate()}  ></input>


        <br></br>
        <a>Essa data está disponível</a>
        <br></br>
      
        
        <button className="Add" onClick={handleClickData} onAuxClick={limparFormulario} value='Cadastrar'>Criar uma nova reunião</button>
      </div>)
         }
         
      <div className="add">
        <img src={add} id="add"></img>

        <p id="addp">Adicionar nova reunião</p>

        <p className="label">Início da reunião</p>
        <input type="time" className="time" value={reuniao.inicio_reuniao} onChange={aoDigitar} name='inicio_reuniao'  ></input>

        <p className="label">Término da reunião</p>
        <input type="time" className="time" value={reuniao.termino_reuniao} onChange={aoDigitar} name='termino_reuniao' ></input>

        <br></br>

        <label className="label">Nome da reunião</label>
        <br></br>
        <input type="text" className="input" value={reuniao.nomereuniao} onChange={aoDigitar} name='nomereuniao'  ></input>

        <br></br>

        <label className="label">Quantidade de pessoas</label>
        <br></br>
        <input type="number" className="input" value={reuniao.q_pessoas} onChange={aoDigitar}  min="2" name='q_pessoas' ></input>

        <br></br>

        <img src={addtwo} id="more"></img>
        <Link to="/Additen">
          <a href="./Additens" className="a">
            Adicionar itens para reunião
          </a>
        </Link>

        <button /* disabled={buttondisabled}*/ type="button"  className="btnadd" onClick={Cadastrar} onAuxClick={limparFormulario}  value='Cadastrar'>Adicionar</button>
        <button     className="btncan" onClick={limparFormulario} value='limparFormulario'>Cancelar</button>
       
        
       

        <br></br>
      </div>
      <button   className="btnSair" type="button" onClick={() => setToken(null)}>
        Sair
      </button>
    </div>
  );
};

export default PagesHome;
