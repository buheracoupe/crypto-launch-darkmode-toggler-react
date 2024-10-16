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
    console.log(timeToRelease)
    // months left calculation
    const monthsLeft = Math.floor(remainingMs/(30 * 24 * 60 * 60 * 1000))
    remainingMs = remainingMs - (monthsLeft*(30 * 24 * 60 * 60 * 1000))
    console.log(monthsLeft)
    // days left calculation
    const daysLeft = Math.floor(remainingMs/(24 * 60 * 60 * 1000))
    remainingMs = remainingMs - (daysLeft*(24 * 60 * 60 * 1000))
    console.log(daysLeft)
    // hours left calculation
    const hoursLeft = Math.floor(remainingMs/(60*60*1000))
    remainingMs = remainingMs -(hoursLeft*(60*60*1000))
    console.log(hoursLeft)
    // minutes left calculation
    const minutesLeft = Math.floor(remainingMs/(60*1000))
    console.log(minutesLeft)

setTimeLeft({monthsLeft, daysLeft, hoursLeft, minutesLeft, word: "hello"})
console.log(timeLeft)

}, 60000)
}, [])

  return (
<div className="release-container dark:text-white w-[500px] m-auto mt-2 grid grid-cols-4 grid-rows-2 gap-2">
    <div className="tracker font-bold  col-start-1 col-end-5 place-self-center">
        Countdown-Tracker
    </div>
    <div className="months flex flex-col items-center col-start-1 col-end-2 row-start-2">
        <p>Months</p>
        <p className='text-2xl font-semibold'>{timeLeft.monthsLeft}</p>
    </div>
<div className="days flex flex-col items-center col-start-2 col-end-3 row-start-2">
    <p>Days</p>
    <p className='text-2xl font-semibold' >{timeLeft.daysLeft}</p>

</div>
<div className='row-start-2 flex flex-col items-center col-start-3 col-end-4'>
    <p>Hours</p>
    <p className='text-2xl font-semibold'>{timeLeft.hoursLeft}</p>
</div>
<div className='row-start-2 flex flex-col items-center col-start-4 col-span-1'>
    <p>Minutes</p>
    <p className='text-2xl font-semibold'>{timeLeft.minutesLeft}</p>
</div>

</div>
  )
}

export default ReleaseTracker