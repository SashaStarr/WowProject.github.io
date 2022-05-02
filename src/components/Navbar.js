import React from 'react'
import '../style/Navbar.css'
import { Link } from "react-router-dom";
import HomeButton from "../images/100 x100/home-button_icon-icons.com_72700.png"
import OrderButton from "../images/100 x100/receipt_icon_216551.png"
import AccountButton from "../images/100 x100/account_avatar_face_man_people_profile_user_icon_123197.png"



const Navbar = () => {
  

  return (
    <div className="Navigation">
        <Link exact to="/order" className='element'><img src={OrderButton} id='buttonStyle'/></Link>
        <Link exact to="/Home" className='element'><img src={HomeButton} id='buttonStyle'/></Link>
        <Link exact to="/account" className='element'><img src={AccountButton} id='buttonStyle'/></Link>
        
    </div>

  )
}

export default Navbar