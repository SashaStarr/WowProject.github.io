import React from 'react'
import '../style/LogOut.css'
import { Link } from "react-router-dom";
import { useUserContext } from "../context/useContext";
import Navbar from '../components/Navbar';

const LogOut = () => {
  const { logoutUser } = useUserContext();
  return (
    <div>
      <div className='container' id='LogOutDiv'>
          <div className='row' id='LogOutText'>
              <Link exact to="/" id='LogOut'>
                  <button onClick={logoutUser} id='h1logout'>LogOut</button>
              </Link> 
          </div>
          
        
      </div>
      <Navbar />
    </div>
  ) 
}

export default LogOut