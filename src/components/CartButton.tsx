"use client"
import { Store } from '@/lib/Store';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'; 

function CartButton() {
  const {cartProduct}=Store()
  return (
    <Link href={"/cart"} className='headerItem text-xs text-gray-100 relative flex items-center'>
      <AiOutlineShoppingCart className=" text-[50px]" />
      <p className='text-white text-xs font-bold mt-3'>Cart</p>
      <span className='absolute text-amazonOrangeDark text-sm top-3 left-[28px]'>{cartProduct?.length > 0 ? cartProduct?.length : 0}</span>
    </Link>
  );
}

export default CartButton;
