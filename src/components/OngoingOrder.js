import { Link } from "react-router-dom";
import React from 'react'
import '../style/OngoingOrder.css'

const OngoingOrder = ({ order, removeOrder }) => {
  const allOrder = Object.entries(order)
  const AllProducts = allOrder.map((item, num) => {
    return <div>name: {item[0]} , count: {item[1][0]} , price: {item[1][1]}$
      <button onClick={() => { removeOrder(item[0], item[1][1]) }}>XUI</button>
    </div>
  })

  return (
    <div className='container' id='containerOn'>
      <div className='row' id='ongoindRow'>
        <div className='TitleOngoing'>Bieżące zamówienie</div>

        <div className='datas'> ТУТ МАЮТЬ ДОДАВАТИСЬ ПРОДУКТИ ЗІ СПИСКУ</div>
        {AllProducts}

        <div className='row' id='OngoingLinks'>
          <Link exact to="/edit" className='col-6' id='edit'>EDIT</Link>
          <Link exact to="/confirm" className='col-6' id='confirm' >CONFIRM</Link>
        </div>
      </div>
    </div>
  )
}

export default OngoingOrder