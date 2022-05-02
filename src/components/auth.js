import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import '../style/Auth.css'

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex} id='newu'>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
}; 

export default Auth;