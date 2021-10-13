import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  //실제값이랑 set을 선언
  const onIncrease = () => {
    setNumber((PrevNumber) => PrevNumber + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>+2</button>
    </div>
  );
}

export default Counter;
