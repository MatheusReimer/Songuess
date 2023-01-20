import React from 'react'
import Image from 'next/image'
import logo from "../public/images/GUESS IT.png"

function Header() {
    return (
        <div className="w-[100vw] flex h-[10vh]  items-center bg-black">
            <div className='flex w-[100vw] justify-center'>
                <a href='/'>
                    <Image alt=''
                        src={logo}
                        className="h-[200px] w-[200px] cursor-pointer"></Image>
                </a>
            </div>
        </div>
    )
}

export default Header
