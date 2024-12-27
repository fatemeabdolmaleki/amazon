import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { logo } from '@/assets/index'
import { FaLocationDot } from "react-icons/fa6";
import SearchInput from './SearchInput';
import SignInButton from './SignInButton';
import FavoriteButton from './FavoriteButton';
import CartButton from './CartButton';
import HeaderButton from './HeaderButton';

const Header = () => {
    return (
        <header className='sticky top-0 z-50'>
            {/* topHeader */}
            <div className='w-full h-20 bg-amazonBlue text-lightText'>
                <div className='w-full h-full mx-auto inline-flex items-center gap-1 md:gap-3 px-4'>
                    {/* logo */}
                    <Link href={"/"}>
                        <Image src={logo} alt='logo' className='w-28  object-cover' />
                    </Link>
                    {/* deliver */}
                    <div className='headerItem hidden lg:inline-flex gap-1'>
                        <FaLocationDot className='text-lg text-white' />
                        <div className='text-xs'>
                            <p>Deliver to</p>
                            <p className='font-bold text-white uppercase'>USA</p>
                        </div>
                    </div>
                    {/* search */}
                    <SearchInput/>
                    {/* account */}
                    <SignInButton/>
                    {/* favorite */}
                    <FavoriteButton/>
                    {/* cart */}
                    <CartButton/>
                </div>

            </div>
            {/* bottomHeader */}
            <HeaderButton/>
        </header>
    )
}

export default Header