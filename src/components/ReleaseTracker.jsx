import React, { useState } from 'react'
import { useEffect } from 'react';

function ReleaseTracker() {
const releaseDay = new Date(2025, 1, 21)
const releaseTime = releaseDay.getTime()
const [timeLeft, setTimeLeft] = useState({})


useEffect(()=>{
setInterval(()=>{
    const now = Date.now()
    const timeToRelease = releaseTime - now;
    let remainingMs = timeToRelease;

    // months left calculation
    const monthsLeft = Math.floor(remainingMs/(30 * 24 * 60 * 60 * 1000))
    remainingMs = remainingMs - (monthsLeft*(30 * 24 * 60 * 60 * 1000))
    // days left calculation
    const daysLeft = Math.floor(remainingMs/(24 * 60 * 60 * 1000))
    remainingMs = remainingMs - (daysLeft*(24 * 60 * 60 * 1000))

    // hours left calculation
    const hoursLeft = Math.floor(remainingMs/(60*60*1000))
    remainingMs = remainingMs -(hoursLeft*(60*60*1000))

    // minutes left calculation
    const minutesLeft = Math.floor(remainingMs/(60*1000))
    remainingMs = remainingMs % (60*1000)

    // seconds left calculation
    const secondsLeft = Math.floor(remainingMs/1000)

setTimeLeft({monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft})

}, 1000)
}, [])

  return (
<div className="release-container dark:text-white w-[500px] m-auto mt-2 grid grid-cols-5 grid-rows-2 gap-2">
    <div className="tracker font-bold  col-start-1 col-end-6 place-self-center">
        Event-Tracker
    </div>
    <div className="months flex flex-col items-center col-start-1 col-end-2 row-start-2">
        <p>Months</p>
        <p className='text-2xl font-semibold dark:text-orange-600'>{timeLeft.monthsLeft}</p>
    </div>
<div className="days flex flex-col items-center col-start-2 col-end-3 row-start-2">
    <p>Days</p>
    <p className='text-2xl font-semibold dark:text-orange-600' >{timeLeft.daysLeft}</p>

</div>
<div className='row-start-2 flex flex-col items-center col-start-3 col-end-4'>
    <p>Hours</p>
    <p className='text-2xl font-semibold dark:text-orange-600'>{timeLeft.hoursLeft}</p>
</div>
<div className='row-start-2 flex flex-col items-center col-start-4 col-span-1'>
    <p>Minutes</p>
    <p className='text-2xl font-semibold dark:text-orange-600'>{timeLeft.minutesLeft}</p>
</div>
<div className='row-start-2 flex flex-col items-center col-start-5 col-span-1'>
    <p>Seconds</p>
    <p className='text-2xl font-semibold dark:text-orange-600'>{timeLeft.secondsLeft}</p>
</div>

</div>
  )
}

export default ReleaseTracker