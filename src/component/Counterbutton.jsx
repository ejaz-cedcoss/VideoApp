import { useRef } from "react";

function Counterbutton(props) {
  // eslint-disable-next-line react/prop-types
  const { onIncreament } = props;

  //   let num = 0;
  const num = useRef(0);

  function handleClick() {
    onIncreament(5);
    num.current++;
    console.log(num.current);
  }
  return <button onClick={handleClick}>count</button>;
}

export default Counterbutton;
