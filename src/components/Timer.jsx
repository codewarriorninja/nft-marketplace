import { useEffect, useState } from "react"


const Timer = () => {
    const [time, setTime] = useState({
        hours:59,
        minutes:59,
        seconds:59,
    });
    useEffect(() => {
     const timerId = setInterval(() => {
       setTime((prevTime) => {
        let {hours,minutes,seconds} = prevTime;

        if(seconds > 0){
            seconds-=1;
        }else if(minutes > 0){
            minutes-=1;
            seconds=59;
        }else if(hours > 0){
            hours-=1;
            minutes=59;
            seconds=59;
        }else{
            hours=59;
            minutes=59;
            seconds=59
        }
        return {hours,minutes,seconds}
       })
     },1000);
      return () => clearInterval(timerId)
    },[]);
  return (
    <div className="flex space-x-2 font-semibold font-WorkSans text-white">
        <div className="flex flex-col">
           <h1 className="text-4xl ">{String(time.hours).padStart(2,'0')} :</h1>
           <p>Hours</p>
           </div>
        <div className="flex flex-col"><h1 className="text-4xl">{String(time.minutes).padStart(2,'0')} :</h1><p>Minutes</p></div>
        <div className="flex flex-col"><h1 className="text-4xl">{String(time.seconds).padStart(2,'0')}</h1><p>Seconds</p></div>
    </div>
  )
}

export default Timer