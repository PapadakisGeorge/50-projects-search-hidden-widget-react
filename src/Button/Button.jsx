import React from "react";
import {FaSearch} from 'react-icons/fa';

import './Button.scss';

const Button = (props) => {
  return (
    <button 
      className="btn"
      onClick={() => props.changeActive()}>
      <FaSearch/>
    </button>
  )
};

export default Button;

