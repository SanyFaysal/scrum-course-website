import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({ props }) => {
    const { initialHours, initialMinute, initialSeconds } = props;
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }

            if (minutes <= 0) {
                if (hours === 0) {
                    clearInterval(myInterval)
                } else {
                    setHours(hours - 1);
                    setMinutes(0);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div className='text-white'>
            {minutes === 0 && seconds === 0
                ? <p>Expired</p>
                :
                <div class="grid grid-flow-col gap-6 text-center auto-cols-max mt-5">

                    <div class="flex flex-col p-2   bg-[#fd5fe3] rounded-box text-neutral-content">
                        <span class=" font-mono text-4xl">
                            <span className='font-bold'>{hours < 10 ? `0${hours}` : hours}</span>
                        </span>
                        hours
                    </div>
                    <div class="flex flex-col p-2  bg-[#fd5fe3] rounded-box text-neutral-content">
                        <span class=" font-mono text-4xl">
                            <span className='font-bold'>{minutes < 10 ? `0${minutes}` : minutes}</span>
                        </span>
                        min
                    </div>
                    <div class="flex flex-col p-2  bg-[#fd5fe3] rounded-box text-neutral-content">
                        <span class=" font-mono text-4xl">
                            <span className='font-bold'>{seconds < 10 ? `0${seconds}` : seconds}</span>
                        </span>
                        sec
                    </div>
                </div>
                // <h1>hi {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            }

        </div >
    )
}

export default Timer;