"use client"
import { Product } from '@/lib/type'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
    product: Product
}



function ProductImage({ product }: Props) {
    const [imgUrl, setImgUrl] = useState(product.images[0])
    return (
        <div className='flex flex-start '>

            {/* rightSide */}
            <div>
                {product.images.map((val, index) => {
                    return (
                        <Image src={val} key={index} alt='productImage' width={200} height={200} loading="lazy" unoptimized={true}

                            className={`w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-200 border border-gray-200 mb-1 p-1 ${imgUrl===val && "border-gray-500 rounded-sm opacity-100"} `}
                            onClick={()=>setImgUrl(val)}/>
                    )
                })}
            </div>



            {/* leftSide */}
            <div className='bg-gray-100 rounded-md ml-5 w-full max-h-[550px]'>
            <Image src={imgUrl} alt='mainImage' width={500} height={500} loading="lazy"
                unoptimized={true} className='w-full h-full object-contain' />
            </div>
        </div>
    )
}

export default ProductImage