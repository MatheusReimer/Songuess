import React from 'react'
import Image from 'next/image'
import logo from "../public/images/GUESS IT.png"

function Header() {
    return (
        <div className="w-[100vw] flex h-[10vh]  items-center">
            <div className='flex w-[40vw] justify-end'>
                <a href='/'>
                    <Image alt=''
                        src={logo}
                        className="h-[200px] w-[200px] cursor-pointer"></Image>
                </a>
            </div>
            <div className="flex justify-evenly w-[40vw] ">
                <h1 className="headerLink">HOW TO PLAY</h1>
                <h1 className="headerLink">STORY</h1>
            </div>
        </div>
    )
}

export default Header
