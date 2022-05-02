import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Orders from './pages/Orders';
import MyAccount from './pages/MyAccount';
import LogOut from './pages/LogOut';
import LogIn from './pages/Autorization'
import Confirm from './pages/Confirm';
import Edit from './pages/Edit';
import ShopItems from './pages/ShopItems';
import FinishOrder from './pages/FinishOrder';
import { ref, get, child, orderByChild } from 'firebase/database';
import StartFirebase from "./firebase/fdatabase";



const App = () => {

  const [state, setState] = useState('');
  const [idProduct, setIdProduct] = useState('')
  const [order, setOrder] = useState({})

  useEffect(() => {
    selectData()
  }, [])
  const selectData = () => {
    const dbref = ref(StartFirebase());
    get(child(dbref, 'Shops/')).then((snapshot) => {
      if (snapshot.exists()) {
        setState(snapshot.val())
      }

      else {
        alert("no data found!");
      }
    })
      .catch((error) => { alert("there is error" + error) });
  }

  const productVariable = (id) => {
    setIdProduct(id)
  }

  const doOrder = (name, price, count = +1) => {
    const newState = JSON.parse(JSON.stringify(order))

    if (newState[name]) {
      newState[name][0] += 1
      newState[name][1] += price
    }
    else (
      newState[name] = [count, price, price]
    )
    setOrder(newState)
  }

  const removeOrder = (name) => {
    const newState = JSON.parse(JSON.stringify(order))

    newState[name][0] -= 1
    newState[name][1] -= (newState[name][2])
    if (newState[name][0] <= 0) {
      delete newState[name]
    }


    setOrder(newState)
  }

  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home state={state} productVariable={productVariable} />} />
        <Route path="/order" element={<Orders state={state} order={order} removeOrder={removeOrder} />} />
        <Route path="/shopitems" element={<ShopItems state={state} idProduct={idProduct} doOrder={doOrder} />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/finishorder" element={<FinishOrder />} />
      </Routes>
    </Router>
  )
}

export default App;
