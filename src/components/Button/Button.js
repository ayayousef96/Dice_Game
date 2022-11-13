import React from "react";
import "./button.css";

function Button (props) {
  
    return (
        <button className="btn" onClick={props.onclick} >
            <i className={props.i}></i> 
                {props.title}
        </button>
      );
  
}

export default Button;