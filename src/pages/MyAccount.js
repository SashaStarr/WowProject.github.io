import React from 'react'
import '../style/MyAccount.css'
import Profil from '../images/100 x100/account_avatar_people_profile_user_icon_123297.png'
import OAplikacji from '../images/100 x100/circle_customer_help_info_information_service_support_icon_123208.png'
import Pomoc from '../images/100 x100/Help_icon-icons.com_55891.png'
import MainProfil from '../images/100 x100/account_circle_icon_137996.png'
import { Link } from "react-router-dom";
import { useUserContext } from "../context/useContext";
import Navbar from '../components/Navbar';

const MyAccount = () => {
    const { user } = useUserContext(); 
  return (
    <div>
        <div className='container' id='mainDivAccount'>
            <div className='row' id='AccountInfo'>
                <div className='col-9'>
                    <h1>{user.email}</h1>
                    <p>***</p>
                </div>
                <div className='col-3'>
                    <img id='AccountInfoImg' src={MainProfil}/>
                </div>
            </div>
            <Link exact to="/logout" className='row' id='AccountInfolist'>
                <div className='List'><img id='AccountInfoImg2' src={Profil}/><h3 id='none'>Profil</h3></div>
            </Link>
            <a className='row' id='AccountInfolist'>
                <div className='List'><img id='AccountInfoImg2' src={OAplikacji}/><h3 id='none'>O aplikacji</h3></div>
            </a>
            <a className='row' id='AccountInfolist'>
                <div className='List'><img id='AccountInfoImg2' src={Pomoc}/><h3 id='none'>Pomoc</h3></div>
            </a>
        </div>
        <Navbar /> 
    </div>
  )
}

export default MyAccount