import logoHeader from './image/logoHeader.svg'
import './Calendar.css'
import './BoxLogin.css'


 function Calendar() {

    return (
    
    <>
        <img src={logoHeader}  className="Logosecund"></img>
        <hr className='line'></hr>
        
        <div className='Calendario'>

            <p>Adicione a data de preferência</p>
            <input type="date" className='date'></input>
            <br></br>
            <a>Essa data está disponível</a>
            <br></br>
            <button className='Add'>Criar uma nova reunião</button>


        </div>

            
        
     </>   
       
    )
    
};
export default Calendar;
    
 
  