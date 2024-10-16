import React from 'react'
import ReleaseTracker from './ReleaseTracker'

function Content() {
  return (
    <div className="content-wrapper flex flex-col p-20 md:px-40">
<div className="content-container">
    <h1 className='m-4 text-4xl text-center dark:text-orange-500 font-bold'> Introducing ZimCoin: A Decentralized Solution to Inflation</h1>
    <p className='leading-8 dark:text-white'>ZimCoin is a decentralized cryptocurrency that aims to address the rampant inflation in Zimbabwe. 
        By utilizing smart contracts and peer-to-peer technology, ZimCoin aims to create a stable and
         predictable financial system without the need for centralized control. , ZimCoin aims to provide a transparent and efficient means of exchange, empowering individuals and businesses to overcome the limitations of hyperinflation. 
         Join the ZimCoin revolution and be among the first to secure advanced tickets for the launch of this ground-breaking cryptocurrency.</p>
</div>
<div className="info-section mx-auto mt-8 flex dark:text-white gap-4">
    <div className='speakers flex flex-col items-center '>
        <p className='text-lg dark:text-orange-500 font-bold'>Speakers</p>
        <p>17</p>
    </div>
    <div className='flex flex-col items-center'>
        <p className='text-lg dark:text-orange-500 font-bold'>People Attending</p>
        <p>2400+</p>
    </div>
    <div className='flex flex-col items-center'>
        <p className='text-lg dark:text-orange-500 font-bold'>Sponsors</p>
        <p>100+</p>
    </div>
    <div className='flex flex-col items-center'>
        <p className='text-lg dark:text-orange-500 font-bold'>Media-Broadcasts</p>
        <p>15+</p>
    </div>
</div>
<ReleaseTracker />
</div>
  )
}

export default Content