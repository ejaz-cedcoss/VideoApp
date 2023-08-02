import { useState } from "react";
import Counterbutton from "./Counterbutton";

const Counter = () => {
  const [num, setNum] = useState(0);

  function onIncreament(incr) {
    setNum((num) => incr + num);
  }

  return (
    <>
      <Counterbutton onIncreament={onIncreament} />
      <div>
        <h3>the counter value: {num}</h3>
      </div>
    </>
  );
};

export default Counter;
