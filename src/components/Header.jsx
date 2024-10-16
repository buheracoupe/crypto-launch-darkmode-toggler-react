import React from 'react'

function Header() {
  return (
    <div className="header text-black flex gap-4 m-4 justify-between items-center">
<h1 className='font-bold dark:text-white'>ZimCoin Conference</h1>
<div className="date-container dark:text-white  flex items-center divide-x-2">
    <p className='p-2'>  21 January 2025</p>
    <p className='p-2'>Rainbow Towers, Harare, Zimbabwe</p>
</div>
<button className='bg-black dark:bg-orange-600 dark:text-white text-orange-500 p-2 rounded-md'>Get Your Tickets</button>
</div>
)
}

export default Header