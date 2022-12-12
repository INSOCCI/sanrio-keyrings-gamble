import React from "react";

function RandomNum() {
  for (let i = 0; i < 8; i++) {
    let num = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    console.log(num);
  }
}

export default RandomNum;
