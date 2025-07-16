import {useEffect, useRef, useState} from 'react';
function Tiumer() {

    const intervalRef=useRef<number|null>(null)
    const [tiumer, setTiumer] = useState(0);
    const stopTiumer = () => {
        if (intervalRef.current)clearInterval(intervalRef.current)
    }

    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTiumer((prev)=>prev + 1)
        },1000)
        return () => clearInterval(intervalRef.current!);
    },[])

    return (
        <div>
            <h2>tiumer : {tiumer}</h2>
            <button onClick={stopTiumer} >Stop Timer</button>
        </div>
    );
}

export default Tiumer;