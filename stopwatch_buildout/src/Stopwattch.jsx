import React,{useState} from "react";

const Stopwatch = () =>{
const [currenttime , setcurrenttime] = useState(0);
const [toggle, settoggle] = useState("Start");
const [interval,setinterval] = useState(null);

const handle = ()=>{
    if(toggle === "Start"){
        settoggle("Stop");

        const timer  = setInterval(()=>{
            setcurrenttime((prev)=>prev+1);
        },1000);
        setinterval(timer);
    }else{
        settoggle("Start");
        clearInterval(interval);
        setinterval(null);
    }
};

const handlereset = () =>{
    setcurrenttime(0);
    clearInterval(interval);
    setinterval(null);
    settoggle("Start");
};

const format =() =>{
    let min  = Math.floor(Number(currenttime)/60);
    let sec = Number(currenttime) % 60;
    if(String(sec).length <2) sec = "0"+String(sec);
    return `${min}:${sec}`;
}

return(
    <>
    <h1>STOPWATCH</h1>
    <div>Time: {format()}</div>
    <div>
        <button className="button" onClick={handle}>{toggle}</button>
        <button className="button" onClick={handlereset}>Reset</button>
    </div>
    </>
)


}


export default Stopwatch;