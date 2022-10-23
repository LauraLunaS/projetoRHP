import './Additens.css';
import Header from './Header/Header';
import add from './image/add.svg';

function Additens () {
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
        
        <div className='containeritens'>
        <img src={add} id='add' alt=''></img>

            <p id='addp'>Adicionar itens para a reunião</p>

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

            <button id='adcitem'>Adicionar</button>
            <button id='canitem'>Cancelar</button>

        </div>
        </>

        
    )

}

export default Additens;