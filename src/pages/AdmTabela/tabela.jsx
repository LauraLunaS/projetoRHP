import React from "react";
export default function Tabela({vetor, selecionar,botao}){
    return(
// cabeçalho da tabela
<table className='table'>

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
        <td>{obj.nomereuniao}</td>
        <td>{obj.moment}</td>
        <td>{obj.q_pessoas}</td>
        <td>{obj.termino_reuniao}</td>
        <td>{obj.inicio_reuniao}</td>
        <td><button  onClick={()=> {selecionar(indice)}}className="btn btn-success" >Selecionar</button></td>
        
        
            </tr>

    ))
   }
</tbody>
</table>

    )
}
