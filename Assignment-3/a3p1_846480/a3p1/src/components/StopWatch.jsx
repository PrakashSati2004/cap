// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(()=>{
      setCount((iniVal)=>{
        if(iniVal >= 9){
          clearInterval(intervalId);
        }
        return iniVal + 1;
      });
    },1000) 

    function cleanUpFunction() {
      clearInterval(intervalId);
    }
    return cleanUpFunction;
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;