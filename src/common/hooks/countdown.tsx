import { useEffect, useState,useRef } from "react";

const useDownTimers = () => {
    const id :any =useRef(null);
    const [timer, setTimer] = useState(30);


    const startCountDown = () =>{
      id.current= window.setInterval(()=>{
        if (timer === -1) {
          clear();
          setTimer(30);
          return;
        } 
          setTimer((time)=>time-1)

        },1000)
  }
    const clear=()=>{
    window.clearInterval(id.current);
    setTimer(30)
    startCountDown()
    }


    useEffect(()=>{
        startCountDown()
      return ()=>clear();
    },[])
    
    useEffect(()=>{
      if(timer===0){
        clear();
      }
    },[timer])

  return {
    timer,
    setTimer
  };
};

export default useDownTimers;


