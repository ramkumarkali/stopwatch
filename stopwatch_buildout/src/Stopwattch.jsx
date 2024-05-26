// import React,{useState} from "react";

// const Stopwatch = () =>{
// const [currenttime , setcurrenttime] = useState(0);
// const [toggle, settoggle] = useState("Start");
// const [intervalId,setintervalId] = useState(null);

// const handle = ()=>{
//     if(toggle === "Start"){
//         settoggle("Stop");

//         const timer  = setInterval(()=>{
//             setcurrenttime((prev)=>prev+1);
//         },1000);
//         setintervalId(timer);
//     }else{
//         settoggle("Start");
//         clearInterval(intervalId);
//         setintervalId(null);
//     }
// };

// const handlereset = () =>{
//     setcurrenttime(0);
//     clearInterval(intervalId);
//     setintervalId(null);
//     settoggle("Start");
// };

// const format = () => {
//     let min = Math.floor(currenttime / 60);
//     let sec = currenttime % 60;
//     if (sec < 10) sec = "0" + sec;
//     return `${min}:${sec}`;
//   };

// return(
//     <>
//     <h1>STOPWATCH</h1>
//     <div>Time: {format()}</div>
//     <div>
//         <button className="button" onClick={handle}>{toggle}</button>
//         <button className="button" onClick={handlereset}>Reset</button>
//     </div>
//     </>
// )


// }


// export default Stopwatch;

import React, { useState } from "react";

const Stopwatch= () => {
  const [curTime, setCurTime] = useState(0);
  const [toggle, setToggle] = useState("Start");
  const [intervalId, setIntervalId] = useState(null);

  const handleWatch = () => {
    if (toggle === "Start") {
      setToggle("Stop");
      const timer = setInterval(() => {
        setCurTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(timer);
    } else {
      setToggle("Start");
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    setCurTime(0);
    clearInterval(intervalId);
    setIntervalId(null);
    setToggle("Start");
  };

  const formatted = () => {
    let minutes = Math.floor(Number(curTime) / 60);
    let seconds = Number(curTime) % 60;
    if (String(seconds).length < 2) seconds = "0" + String(seconds);

    return `${minutes}:${seconds}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="time">Time: {formatted()}</div>
      <div>
        <button type="button" onClick={handleWatch}>
          {toggle}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;