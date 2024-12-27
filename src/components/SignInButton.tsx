import React from 'react'
import { BiCaretDown } from 'react-icons/bi'

function SignInButton() {
  return (
    <form action="" className='text-xs text-gray-100 flex flex-col justify-center items-start headerItem'>
        <p>Hello,sign in</p>
        <button className='text-white font-bold flex items-center'>Account & lists{""}
            <span>
                <BiCaretDown/>
            </span>
        </button>
    </form>
  )
}

export default SignInButton