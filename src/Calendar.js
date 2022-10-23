import Header from './Header/Header'
import './Calendar.css'
import add from './image/add.svg'
import addtwo from './image/addtwo.svg'
import './Additens'
import { Link } from "react-router-dom";


function adicionar() {
    return (
        window.confirm("Tem certeza que deseja marcar esta reunião? (info da reunião)")
    )
}

function cancelar() {
    return (
        window.confirm("Tem certeza que deseja cancelar esta reunião?")
    )
}


 function Calendar() {

    return (
    
    <>
        <Header />
        
        <div className='Calendario'>

            <p>Adicione a data de preferência</p>
            <input type="date" className='date'></input>
            <br></br>
            <a>Essa data está disponível</a>
            <br></br>
            <button className='Add'>Criar uma nova reunião</button>

            


        </div>

            <div className='add'>

                <img src={add} id='add'></img>

                <p id='addp'>Adicionar nova reunião</p>

                <p className='label'>Início da reunião</p><input type='time' className='time'></input>

                <p className='label'>Término da reunião</p><input type='time' className='time'></input>

                <br></br>

                <label className='label'>Nome da reunião</label>
                <br></br>
                <input type='text' className='input'></input>

                <br></br>

                <label className='label'>Quantidade de pessoas</label>
                <br></br>
                <input type='number' className='input'></input>

                <br></br>

                <img src={addtwo} id='more'></img>
                <Link to='/Additen'>
                    <a href='./Additens' className='a'>Adicionar itens para reunião</a>
                 </Link>

                <br></br>

                <button onClick={adicionar} id='btnadd'>Adicionar</button>
                <button onClick={cancelar} id='btncan'>Cancelar</button>

                
            </div>
       
            
        
     </>   
       
    )
    
};
export default Calendar;
    
 
  