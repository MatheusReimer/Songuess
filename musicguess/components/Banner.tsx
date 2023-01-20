import React from 'react'
import {UserCircleIcon} from '@heroicons/react/24/solid'
import {ArrowRightOnRectangleIcon, CheckCircleIcon, ChartBarIcon} from '@heroicons/react/24/solid'
import {AiFillTwitterCircle, AiFillGoogleCircle, AiFillRedditCircle, AiFillFacebook} from "react-icons/ai";


function Banner() {
    return (
        <div className="flex flex-col w-full h-[90vh] align-middle justify-center items-center text-black ">
            <div className='w-[50vw] bg-white h-[55vh] rounded-3xl text-center'>
                <div className='font-semibold text-lg h-[6vh] mt-4'>Get Your Ears Ready</div>
                <div className='flex w-full justify-evenly'>
                    <div className='flex-col justify-evenly h-full'>
                        <p className='font-semibold'>Enter As Anonymous</p>
                        <UserCircleIcon width={250}/>
                        <p className='mb-1 font-semibold'>Username
                        </p>
                        <input className='bg-white border-2 border-black text-black h-8 rounded-full text-center'></input>
                        <a href='/login' className='text-white'>
                            <div className='h-10 w-full bg-pink-500  mt-4 font-bold rounded-full flex justify-center items-center cursor-pointer border-black border-2'>PLAY</div>
                        </a>
                    </div>
                    <div className='border-l-2 border-solid h-[375px] border-black'></div>


                    <div className='flex-col justify-evenly h-full'>
                        <p className='font-semibold'>Steps of registration</p>
                        <div className='flex'>
                            <div className='m-4 max-w-[100px]'>
                                <ArrowRightOnRectangleIcon width={100}/>
                                <p className='font-extralight'>Register and Login</p>
                            </div>
                            <div className='m-4 max-w-[100px]'>
                                <CheckCircleIcon width={100}/>
                                <p className='font-extralight'>Get your profile ready</p>
                            </div>
                            <div className='m-4 max-w-[100px]'>
                                <ChartBarIcon width={100}/>
                                <p className='font-extralight'>Check your stats and ranks</p>
                            </div>
                        </div>

                        <hr></hr>
                        <div className='m-6'>
                            <p>Enter With</p>
                        </div>
                        <div className='grid grid-cols-2 gap-2 text-white font-bold'>
                            <div className='bg-blue-700 border-black rounded-md border-2 flex  justify-evenly items-center h-10 cursor-pointer'>
                                <AiFillTwitterCircle color='white'
                                    size={25}></AiFillTwitterCircle>Twitter</div>
                            <div className='bg-red-500 border-black rounded-md border-2  flex justify-evenly items-center h-10 cursor-pointer'>
                                <AiFillGoogleCircle color='white'
                                    size={25}></AiFillGoogleCircle>Google</div>
                            <div className='bg-[#f84803] border-black rounded-md border-2 flex justify-evenly items-center h-10 cursor-pointer'>
                                <AiFillRedditCircle color='white'
                                    size={25}></AiFillRedditCircle>Reddit</div>
                            <div className='bg-blue-500 border-black rounded-md border-2 flex justify-evenly items-center h-10 cursor-pointer'>
                                <AiFillFacebook color='white'
                                    size={25}></AiFillFacebook>Facebook</div>
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
