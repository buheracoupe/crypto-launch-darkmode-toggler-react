import React from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function changeMode(boolean){
        setIsDarkMode(boolean)
        boolean ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    console.log(document.body.classList)
    }
  return (
    <div className={`button-container absolute overflow-hidden
    ${isDarkMode? " divide-white" : null} rounded-lg flex items-center divide-x-2 divide-black top-[6.5rem] right-8`}>
        <button onClick={()=>{changeMode(false)}} className={`light text-2xl  p-2 bg-orange-600
             ${isDarkMode? "text-orange-600 bg-white": "text-black"}`}><MdLightMode /></button>
        <button onClick={()=>{changeMode(true)}} className={`dark text-2xl bg-black p-2 ${isDarkMode? "text-black bg-orange-600" : "text-white"}`}><MdDarkMode /></button>
    </div>

  )
}

export default DarkModeToggle