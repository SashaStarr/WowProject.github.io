import React from 'react'
import OngoingOrder from '../components/OngoingOrder'
import CalculateDiscount from '../components/CalculateDiscount'
import OrderHistory from '../components/OrderHistory'
import testhistory from '../testhistory.json'
import testhistorylist from '../testhistoryproducts.json'
import Navbar from '../components/Navbar';

const Orders = ({ state, order, removeOrder }) => {
  const history = (testhistory)
  const testhistoryp = (testhistorylist)
  return (
    <div>
      <OngoingOrder state={state} order={order} removeOrder={removeOrder} />
      <CalculateDiscount />
      <OrderHistory history={history} testhistoryp={testhistoryp} />
      <Navbar />
    </div>
  )
}

export default Orders