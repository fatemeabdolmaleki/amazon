import React from 'react'
import Container from './Container'
import { footerData } from '@/constants'
import FooterMiddleList from './FooterMiddleList'
import { FaGithub } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io5'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='bg-footerBg text-lightText'>
            <Container className='py-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    footerData.map((val) => {
                        return (
                            <FooterMiddleList key={val.id} title={val.title} listItem={val.listItem} />
                        )
                    })
                }
            </Container>
            <div className='flex flex-col justify-center items-center bg-footerBottom py-2'>
                <ul className='text-gray-300 text-sm flex gap-4 py-2'>
                    <li >
                        <a
                            href="https://github.com/fatemeabdolmaleki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-normal text-[25px] hover:cursor-pointer text-white"
                        >
                            <FaGithub />
                        </a>

                    </li>
                    <li >
                        <a
                            href="https://www.instagram.com/fatemeabdolmaleki_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-normal text-[25px] hover:cursor-pointer text-white"
                        >
                            <FaInstagram />
                        </a>

                    </li>
                    <li >
                        <a
                            href="https://www.linkedin.com/in/fateme-abdolmaleki/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-normal text-[25px] hover:cursor-pointer text-white"
                        >
                            <IoLogoLinkedin />
                        </a>

                    </li>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center bg-footerBottom py-2'>
                <p className='font-normal text-[20px] text-white '>Coded By Fateme Abdolmaleki</p>
            </div>
        </footer>
    )
}

export default Footer