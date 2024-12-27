"use client"
import React, { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'

function SearchInput() {
    const [searchQuery,setSearchQuery]=useState("")
    
    
  return (
    <div className='flex-1 h-10 mx-4 hidden md:inline-flex items-center justify-between relative '>
        <input type="text" placeholder='Search amazon products... ' className='w-full h-full rounded-md px-2 
        placeholder:text-sm text-black text-base border-[3px] border-transparent outline-none focus-visible:border-amazonOrange' 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}/>
        {searchQuery && (
            <MdOutlineClose onClick={()=>setSearchQuery("")} className='text-xl text-amazonLight
            hover:text-red-600 absolute right-14 duration-200 cursor-pointer'/>
        )}
        <span className='w-12 h-full bg-amazonOrange hover:bg-amazonOrangeDark duration-300 cursor-pointer
        text-black text-2xl  flex justify-center items-center rounded-tr-md rounded-br-md absolute right-0 top-0 '>
            <HiOutlineSearch/>
        </span>
    </div>
  )
}

export default SearchInput