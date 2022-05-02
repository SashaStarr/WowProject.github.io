import { Link } from "react-router-dom";
import React from 'react'
import '../style/Edit.css'
import Navbar from '../components/Navbar';

const Edit = () => {
  return (
      <div>
    <div className='container' id='containerEdit'>
      <div className='row' id='editRow'>
        <div className='TitleEdit'>EDYTUJ ZAMOWIENIE</div>

        <div className='datasEdit'> ТУТ МАЮТЬ ДОДАВАТИСЬ ПРОДУКТИ ЗІ СПИСКУ, ЇХ МОЖНА ЕДИТУВАТИ (МІНЯТИ КІЛЬКІСТЬ ТА ВИДАЛЯТИ ЗІ СПИСКУ)</div>
        <div>PRODUCT 1 + X - ...</div>
        <div>PRODUCT 2 + X - ...</div>
        <div>PRODUCT 3 + X - ...</div>
        <div className="sumaEdit">SUMA zł</div> 
        

        
      </div>
        <div className='row' id='EditLinks'>
            <Link exact to="/confirm" className='col-12' id='confirmEdit' >CONFIRM</Link>
            <Link exact to="/Home" className='col-12' id='cancelEdit' >Cancel order</Link>
        </div>
        
    </div>
    <Navbar/>
    </div>
  )
}

export default Edit