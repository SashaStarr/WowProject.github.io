import React from 'react'
import Auth from "../components/auth";
import { useUserContext } from "../context/useContext";
import '../style/Auth.css'
import MyAccount from './MyAccount';

const Autorization = () => {
  const { user, loading, error } = useUserContext();

  return (
    <div className='Authdiv'>
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <MyAccount /> : <Auth />} </>}
    </div>
  )
}
 
export default Autorization