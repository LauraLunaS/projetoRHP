import React from "react";
export default function Formulario({obj,eventoTeclado,alterar,remover,cancelar,botao}){
    return(
<form>

<input type='date'  value={obj.moment} onChange={eventoTeclado}  name='moment' placeholder='Moment' min="2022-11-27" className='form-control'/>
<input type='text'  value={obj.inicio_reuniao}  onChange={eventoTeclado} name='inicio_reuniao' placeholder='inicio_reuniao' className='form-control' />
<input type='text'  value={obj.termino_reuniao}  onChange={eventoTeclado} name='termino_reuniao' placeholder='termino_reuniao'  className='form-control'/>
 
 
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