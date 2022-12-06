import React from "react";
import {Table} from "react-bootstrap"
export default function Tabela({vetor, selecionar,botao}){
    
    return(
// cabeçalho da tabela

<Table striped bordered hover>
<thead>
<tr>
<th>#</th>
<th>NomeReuniao</th>
<th>Data</th>
<th>q_pessoas</th>
<th>termino_reuniao</th>
<th>inicio_reuniao</th>
<th>Selecionar</th>
</tr>
</thead>

<tbody>
   {
    vetor.map((obj, indice)=>(
        
        <tr key={indice}>

        <td>{indice+1}</td>
        <td>{obj.local}</td>
        <td>{obj.data}</td>
        <td>{obj.quantidade}</td>
        <td>{obj.horarioInicio}</td>
        <td>{obj.horarioFinal}</td>
        <td><button  onClick={()=> {selecionar(indice)}}className="btn btn-success" >Selecionar</button></td>
       
            </tr>

            

    ))
   }
</tbody>



</Table>
 

    )
}
