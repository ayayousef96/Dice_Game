import React,{useState} from "react";
import "./Input.css";

function Input (props) {
    const [points,setPoints] =useState(100);
  

  //update the state text by the user input
  const handleInput = (event) => {
    setPoints( event.target.value );
  };

  //save the user input when the user press enter
  const handleKey = (event) => {
    if (event.key === "Enter"){
     return props.saveInput(points);
    }
  };

    return (
      <>
        <label className="label">{props.labelName}</label>
        <input
          type="text"
          onChange={handleInput}
          value={points}
          onKeyPress={handleKey}
          className="input-style"
          
        />
      </>
    );
  }


export default Input;