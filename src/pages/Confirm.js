import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import '../style/Confirm.css'

const Confirm = () => {
    function vibrate(ms){
        navigator.vibrate(ms)
    }
      
  return (
    <div>
        <div className='finishTitle'>
            <Link exact to="/Home" id='finishback' onClick={vibrate(1000)}>Cansel order</Link>
            <div id='finishtitle'>ZAKONCZENIE ZAKUPU</div>
        </div>
        <div className='container' id='finishContainer'>
            <div className='row'>
                <input type="text" placeholder='Kraków, ul.Rakowicka 27' id='mapInput'></input>
                <div>Podaj swój adres</div>
            </div>
            <div className='row' id='Payment'>
                <div className='col-12' id='payTitle'>Wybierz metodę platności</div>
                <div className='col-4' id='choose'>Credit card</div>
                <div className='col-4' id='choose'>Crypto</div>
                <div className='col-4' id='choose'>Cash</div>
            </div>
            <div className='row' id='finishButton'> 
                <Link exact to="/finishorder" className='col-12' id='confirmEdit' >CONFIRM</Link>
            </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Confirm