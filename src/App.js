import React, {useState} from "react";
import Player from "./components/Player/Player";
import Dice from "./components/Dice/Dice";
import './App.css';
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Alert from "./Alert/Alert";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App (props) {
  const [winningPoints,setWinningPoints] = useState(20);
  const [dice,setDice]= useState([1,1]);
  const [currScore1,setCurrScore1] =useState(0);
  const [currScore2,setCurrScore2] =useState(0);
  const [total1,setTotal1] =useState(0);
  const [total2,setTotal2] =useState(0);
  const [turn,SetTurn] = useState(1);
  const [isDouble6 , setDouble6] = useState(false);

  //const msg="ou got double sixes!! you have lost all your points!";



  const updateDice = (firstDice, secoundDice, sumDiceResults) => {
    setDice([firstDice,secoundDice]);
    if(turn === 1){
      setCurrScore1(currScore1 + sumDiceResults);
    }
    else{
      setCurrScore2(currScore2 + sumDiceResults);

    }  
  };

  const diceClick = () => {
    let firstDice = Math.floor(Math.random() * 6) + 1;
    let secoundDice = Math.floor(Math.random() * 6) + 1;
    //test double 6
    // let firstDice = 6;
    // let secoundDice = 6;
    const sumDiceResults = firstDice + secoundDice;
    if(firstDice === 6 && secoundDice === 6 ){
      setDouble6(true);
    }
    updateDice(firstDice, secoundDice, sumDiceResults);
    handleDouble6(isDouble6);
    ResetScore(isDouble6);
  };

  const ResetScore = (isDouble6) =>{
    if(isDouble6){
      turn===1 ? setTotal1(0): setTotal2(0);
      turn===1 ? SetTurn(2): SetTurn(1);
    }
  }

  const showAlert=()=>{
  
  }

  const handleDouble6 =(isDouble6) =>{
    if(isDouble6){
      setDouble6(true);
      showAlert();
    }
  }

  const handleHold = () => {
    
      if(turn === 2) {
          if(currScore2===0){
            return;
          }

           SetTurn(1);
           setTotal2(total2 + currScore2);
           setCurrScore2(0);
          
          }
        else{
            if(currScore1===0){
              return;
            }
            SetTurn(2);
            setTotal1(total1 + currScore1);
            setCurrScore1(0);
           
          }
   
  };

  const Winning = () => {
    if (winningPoints === total1 || winningPoints <= total2) {
      return <div className="winner-page">{`player 1 won!!`}</div>;
    } 
    else if (winningPoints === total2 || winningPoints <= total1) {
      return <div className="winner-page">{`player 2 won!!`}</div>;
    }
  };

  const creatPlayer=(playerNum) => {
    return (
      <>
        <Player
          classOfTurn={
            turn === playerNum ? "turn-border" : ""
          }
          title={`Player ${playerNum} `}
          totalScore = {
            playerNum === 1 ? `${total1}`: `${total2}`
           }
          currentScore={
            playerNum === 1 ? `${currScore1}` : `${currScore2}`
          }
        />
      </>
    );
  }


  const reset =()=>{
    setWinningPoints(100);
    setCurrScore1(0);
    setCurrScore2(0);
    setDice([1,1]);
    setDouble6(false);
    setTotal1(0);
    setTotal2(0);
    SetTurn(1);

  }

  const onHandleInput = (input) =>{
    setWinningPoints(input);
  }

    return(
      <>
      <center><Button title="New Game" onclick={reset} /></center>
     
      <div className="players-container">
          {Winning()}
          {creatPlayer(1)}
          {creatPlayer(2)}
        </div>
      <div className="dice-container">
          <Dice
            onclick={diceClick}
            firstDice={dice[0]}
            secoundDice={dice[1]}
            
          />
          <center>{isDouble6? <Alert click={ResetScore}/>: null}</center>
          <Button title="Hold" onclick={handleHold} />
          <Input saveInput={onHandleInput} labelName=" Enter points to win " />
      </div>
      </>
    );
  }


export default App;
