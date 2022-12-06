import './adm.css';
import React, { useState,useEffect } from "react";
import Formulario from "./formulario";
import TT from './tabela'



////// HOME.JS ////////// 
/////////////////////////

function App() {

  const Modeloreuniao = {
    id: 0,
    nome: "",
    data: "",
    local:"",
   horarioInicio: "",
    horarioFinal: "",
    quantidade: "",
    email:"",
    criadorDoEvento:""
    
  
  }
  
  // STATE
  const [reuniao, setReuniao] = useState([]);
  const [objReuniao, setObjReuniao] = useState(Modeloreuniao);
  const[renderizar,setRenderizar]=useState(true)
  
  //UseEffect

  useEffect(() => {
    fetch("http://localhost:8080/evento/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setReuniao(retorno_convertido));
  }, [])
  
  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    console.log(e.target);// o objeto que está executando o evento.
    setObjReuniao({ ...objReuniao, [e.target.name]: e.target.value })// o valor que está contendo o objeto produto, código, valor e marca.
  }
  
  


 //Selecionar produto

 const selecionarProduto = (indice) => {
  setObjReuniao(reuniao[indice]);
  setRenderizar(false);
 }

 //Alterar Produto
  const ALTERAR = () => {
    fetch('http://localhost:8080/evento/alterar', {
      method: 'put',
      body: JSON.stringify(objReuniao),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        if (retorno_convertido.mensagem !== undefined) {

          alert(retorno_convertido.mensagem)
        } else {
          //setProdutos([...reuniao,retorno_convertido]);

          //Mensagem
          alert('Reuniao cadastrada com sucesso! IdReuniao = '+objReuniao.id)

          // Cópia do vetor de produtos

          let vetorTemp = [...reuniao]; // acessar ao código,nome e marca.

          // Ìndice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objReuniao.id;
            // retorna a posição de alguma verificação.
            // posição que foi removida do vetor.
          });

          // Alterar produto do vetorTemp

          vetorTemp[indice] = objReuniao;

          // Atualizar o vetor de produtos
          setReuniao(vetorTemp);
           // limpar formulario
          limparFormulario()
        }

      })
  
 }


  //Remover Produto
  const remover = () => {
    fetch('http://localhost:8080/evento/remover/' + objReuniao.id, {
      method: 'delete',

      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        // Mensagem
        alert(retorno_convertido.mensagem);

        // Cópia do vetor de produtos

        let vetorTemp = [...reuniao]; // acessar ao código,nome e marca.

        // Ìndice
        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objReuniao.id;
          // retorna a posição de alguma verificação.
          // posição que foi removida do vetor.
        });

        // Remover produto do vetorTemp

        vetorTemp.splice(indice, 1);
        // Atualizar o vetor de produtos
        setReuniao(vetorTemp);

        //Limpar formulário
        limparFormulario();


      })
  }


  const limparFormulario = () => {
    setObjReuniao(reuniao); // modelo sempre vai estar limpo.
    setRenderizar(true);
    
  }

  return (
    <div className="App">

      <Formulario  botao={renderizar}  obj={objReuniao} eventoTeclado={aoDigitar} remover={remover} alterar={ALTERAR}  cancelar={limparFormulario}/>
      <TT   botao={renderizar} vetor={reuniao}  selecionar={selecionarProduto} />
      
    </div>
  );
}

export default App;
