import React from "react";
import "./player.css";

function Player(props) {
 
    return (
      <div className={`palyer-box ${props.classOfTurn}`}>
        <h1>{props.title}</h1>
        <div className="palyer-box_total-score palyer-box_score-design">
          <div className="the-score">{`${props.totalScore}`}</div>
          Total Score
        </div>
        <div className="palyer-box_current-score palyer-box_score-design">
          <div className="the-score">{`${props.currentScore}`}</div>
          Current Score
        </div>
      </div>
    );
  
}

export default Player;