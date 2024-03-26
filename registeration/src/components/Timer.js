// import './Timer.css';
// import {useState,useEffect} from 'react';
// const Timer = ()=>{
//       const[hours,setHours] = useState(6);
//       const[minutes,setMinutes] = useState(0);
//       const[seconds,setSeconds] = useState(0); 
//       var timer;
//       useEffect(()=>{
//         timer = setTimeout(()=>{
//             setSeconds(seconds+1);
//             if(seconds===59){
//                  setMinutes(minutes+1);
//                  setSeconds(0);

//             }
//             else if(minutes === 59){
//                    setHours(hours-1);
//                    setMinutes(0);
//             }
//        },1000);  
//        return ()=>{
//             clearInterval(timer);
//        }
//     }) ; 
//         return (
//             <div className='d-flex justify-content-center align-items-center  a90' >
//             offer ends in {hours}:{minutes}:{seconds}
//        </div> 
//         );
// }
// export default Timer;
import './Timer.css';
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [hours, setHours] = useState(6);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (seconds === 59) {
                setSeconds(0);
                if (minutes === 59) {
                    setMinutes(0);
                    setHours(hours => hours - 1);
                } else {
                    setMinutes(minutes => minutes + 1);
                }
            } else {
                setSeconds(seconds => seconds + 1);
            }
        }, 1000);

        // Clear the timer on component unmount or on re-render
        return () => clearInterval(timer);
    }, [hours, minutes, seconds]); // Include dependencies

    return (
        <div className='d-flex justify-content-center align-items-center a90'>
            Offer ends in {hours}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
        </div>
    );
};

export default Timer;
