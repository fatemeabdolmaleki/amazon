import React from 'react'
import { MdMenu } from 'react-icons/md'

function HeaderButton() {
  return (
    <div className='bg-amazonLight text-white/80'>
        <div className='flex items-center space-x-3 py-1 pl-6 text-sm'>
            <p className='flex items-center link'><MdMenu className='text-lg mr-1'/>All</p>
            <p className='link'>Today&apos;s Deals</p>
            <p className='link'>Customer Service</p>
            <p className='link hidden lg:inline-flex'>Registry</p>
            <p className='link hidden lg:inline-flex'>Gift Cards</p>
            <p className='link hidden lg:inline-flex'>Sell</p>
            <p className='text-amazonYellowDark tracking-wide underline underline-offset-2 decoration-[1px]'>please sign in to access your cart!</p>
        </div>
    </div>
  )
}

export default HeaderButton