import React from 'react'
import '../style/OrderHistory.css'

const OrderHistory = ({history, testhistoryp}) => {
    const orderHistorylist  = testhistoryp.products.map(item => {
        return(
            <p>{item.name}: {item.number}x {item.price}</p>
        )
    }
    )
    const orderHistory  = history.orders.map(item => {
        return(
            <div className='OrderView'>
                <div >
                    <p className='OrderTitle'>Zamowienie {item.name}</p>
                    <p className='OrderDate'>{item.date}</p>
                </div>
                <div className='OrderList'>
                    {orderHistorylist}
                </div>
                <div className='OrderAmount'>
                    <h3>{item.amount}</h3>
                    <p>See more ...</p>
                </div>
            </div>
        )
    }
    )
  return (
    <div className='container' id='HistoryView'>
            <div className='row'><h2 id='HistoryTitle'>HISTORIA ZAMÓWIEŃ</h2></div>
        {orderHistory}
    </div>
  )
}

export default OrderHistory