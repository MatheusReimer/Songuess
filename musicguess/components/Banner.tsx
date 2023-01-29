import React from 'react'
import {UserCircleIcon} from '@heroicons/react/24/solid'
import {ArrowRightOnRectangleIcon, CheckCircleIcon, ChartBarIcon} from '@heroicons/react/24/solid'
import {FaSpotify} from "react-icons/fa"
import { signIn } from 'next-auth/react';


function Banner() {
    return (
        <div className="flex flex-col w-full h-[90vh] align-middle justify-center items-center text-black ">
            <div className='w-[25vw] bg-white h-[40vh] rounded-3xl text-center'>
                <div className='font-semibold text-lg h-[6vh] mt-4'>Get Your Ears Ready!</div>
                <div className='flex w-full justify-evenly'>
                 


                    <div className='flex-col justify-evenly h-full'>
                        <p className='font-semibold'>Steps of registration</p>
                        <div className='flex'>
                            <div className='m-4 max-w-[100px]'>
                                <ArrowRightOnRectangleIcon width={50}/>
                                <p className='font-extralight'>Login to Spotify</p>
                            </div>
                            <div className='m-4 max-w-[100px]'>
                                <CheckCircleIcon width={50}/>
                                <p className='font-extralight'>Get your profile ready</p>
                            </div>
                            <div className='m-4 max-w-[100px]'>
                                <ChartBarIcon width={50}/>
                                <p className='font-extralight'>Check your stats and ranks</p>
                            </div>
                        </div>

                        <hr></hr>
                        <div className='m-3'>
                            <p>Enter With</p>
                        </div>
                        <div className='flex justify-center align-middle w-full text-white font-bold'>
                            <button onClick={()=>signIn()} className='bg-[#1aa54f] border-black rounded-md border-2 flex w-[200px] justify-evenly items-center h-10 cursor-pointer text-lg'>
                                <FaSpotify color='white'
                                    size={25}></FaSpotify>Spotify</button>
 
                        </div>

                    </div>

                </div>

            </div>
            <a href='/guide' className='text-white'>
                <div className='h-10 w-[100px] bg-pink-500  mt-4 font-bold rounded-full flex justify-center items-center cursor-pointer border-black border-2'>Guide</div>
            </a>
        </div>
    )
}

export default Banner


