import React, {useState} from "react";
import "./dice.css";

function Dice(props) {
  const [isClicke,SetClicked] = useState(true) ;

  // start shake dice animation
  const shaketheDice = () => {
    SetClicked(true);
    resetState();
    return props.onclick();
  };

  //reset state to stop the shake animation
  const resetState = () => {
    setTimeout(() => {
      SetClicked(false);
    }, 500);
  }

  //create a dice
  const creatTheDice =(RollNum) => {
    return (
      <div
        className={`dice-img${RollNum} dice-design box-shadow ${
          isClicke ? "shake-dice" : ""
        }`}
      ></div>
    );
  }
  

  
    return (
      <div className="dice-container">
        <button className="dice_button" onClick={shaketheDice}>
          Roll Dice
        </button>
        <div className="dices-img-container">
          {creatTheDice(props.firstDice)}
          {creatTheDice(props.secoundDice)}
        </div>
      </div>
    );
  
}

export default Dice;
