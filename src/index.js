import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const d = new Date();
let time = 15;
let greeting = "good morning";
const ctmColor = {};

if(time >=1 && time < 12){
  greeting = "good morning!"
  ctmColor.color="red";
}
else if(time >=12 && time < 19 ){
  greeting="good afternoon!";
  ctmColor.color="blue";
}
else{
  greeting="good night!";
  ctmColor.color="orange";
}


ReactDOM.render(
  <div>
    <h1>greeting! <span style={ctmColor}>{greeting}</span></h1>
  </div>,
  document.getElementById("root")
);

