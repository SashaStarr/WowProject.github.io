import React from 'react'
import StoreList from '../components/StoreList'
import StoreListItems from '../components/StoreListItems'
import Navbar from '../components/Navbar';

const Home = ({ state, productVariable, selectData }) => {

  return (
    <div>
      <StoreList />
      <StoreListItems state={state} productVariable={productVariable} />
      <Navbar />
    </div>
  )
}

export default Home