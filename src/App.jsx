import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, rand, zero } from "./features/counter";

const App = () => {
  const num = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(inc());
  };

  const handleDec = () => {
    dispatch(dec());
  };

  const handleRand = () => {
    const random = Math.floor(Math.random() * 100);
    dispatch(rand(random));
  };

  const handleZero = () => {
    dispatch(zero());
  };

  return (
    <div className="main">
      <div className="workZone">
        <div className="check">{num}</div>
        <div className="functional">
          <button className="increment" onClick={handleInc}>
            +
          </button>
          <button className="decrement" onClick={handleDec}>
            -
          </button>
          <button className="zeroing" onClick={handleZero}>
            x
          </button>
          <div>
            <button className="random" onClick={handleRand}>
              rand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
