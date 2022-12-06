import React from "react";
export default function Formulario({obj,eventoTeclado,alterar,remover,cancelar,botao}){
    return(
<form>

<input type='date'  value={obj.data} onChange={eventoTeclado}  name='data' placeholder='data' min="2022-11-27" className='form-control'/>
<input type='text'  value={obj.horarioInicio}  onChange={eventoTeclado} name='horarioInicio' placeholder='inicio_reuniao' className='form-control' />
<input type='text'  value={obj.horarioFinal}  onChange={eventoTeclado} name='horarioFinal' placeholder='termino_reuniao'  className='form-control'/>
 
 
<div>
<input type='button' value='Remover' onClick={remover} className='btn btn-danger'/>
<input type='button'value='Alterar'  onClick={alterar}  className='btn btn-warning'></input>
<input type='button' value='Cancelar' onClick={cancelar}  className='btn btn-secondary'/>




</div>
<div className='atualizar'>
<button  class="btn btn-outline-primary">{botao?'Atualizar/Tabela':'Atualizar/Tabela' }</button>
</div>
</form>


    )
}