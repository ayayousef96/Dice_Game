import React from "react";
import "./Alert.css"


function Alert (props){
   
      return (
        <div className={`massege-box`}>
         <h6>You got double sixes!!you have lost all your points!!</h6> 
         <button onClick={props.click}>ok</button>
        </div>
      );
    }
  
  
  export default Alert;
  