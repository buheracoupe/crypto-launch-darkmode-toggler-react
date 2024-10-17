import React from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from 'react';

function DarkModeToggle() {

    function changeMode(boolean){
        boolean ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    }
  return (
    <div className="button-container absolute overflow-hidden rounded-lg flex items-center top-[6.5rem] right-8">
        <button onClick={()=>{changeMode(false)}} className="light text-2xl  p-2 bg-orange-600 text-black dark:text-orange-600 dark:bg-white"><MdLightMode /></button>
        <button onClick={()=>{changeMode(true)}} className= "dark text-2xl bg-black p-2 text-white dark:text-black dark:bg-orange-600"><MdDarkMode /></button>
    </div>

  )
}

export default DarkModeToggle