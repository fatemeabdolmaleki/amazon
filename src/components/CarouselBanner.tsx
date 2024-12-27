"use client"
import { bannerImgFive, bannerImgFour, bannerImgOne, bannerImgThree, bannerImgTwo } from '@/assets'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react'
import Image from 'next/image';

Autoplay.globalOptions={delay:8000}

function CarouselBanner() {
    const bannerImages=[
        {
            title:"bannerOne",
            source: bannerImgOne
        },
        {
            title:"bannerTwo",
            source: bannerImgTwo
        },
        {
            title:"bannerThree",
            source: bannerImgThree
        },
        {
            title:"bannerFour",
            source: bannerImgFour
        },
        {
            title:"bannerFive",
            source: bannerImgFive
        }
    ];

    const [emblaRef]=useEmblaCarousel({loop:true,duration:100},[Autoplay()])
  return (
    <div className='overflow-hidden cursor-pointer relative z-0' ref={emblaRef}>
        <div className='flex'>
            {
                bannerImages.map((val)=>{
                    return(
                        <Image key={val.title} src={val.source} alt={val.title}  height={1080} className='w-full' priority/>
                    )
                })
            }
        </div>
        <div className='absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-mainColor'/>
    </div>
  )
}

export default CarouselBanner