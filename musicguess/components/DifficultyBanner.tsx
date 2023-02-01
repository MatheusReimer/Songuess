import {signOut} from 'next-auth/react'
import Link from 'next/link';
import React from 'react'


function chBackcolor(color:string) {
    document.body.style.background = color;
 }

function DifficultyBanner({name,id} : {name : string|undefined, id : string|undefined}) {
    return (
        <div className="flex flex-col w-full min-h-[90vh] align-middle justify-center items-center text-black ">
            <button className='bg-pink-500 p-2 border-black rounded-md absolute top-7 text-white right-10'
                onClick={
                    () => signOut()
            }>Logout</button>
            <div className='w-[30vw] bg-white h-[45vh] rounded-3xl flex flex-col align-middle justify-center items-center overflow-y-scroll'>
                <div className='mt-2 mb-2'>
                    <h1 className='text-pink-500 font-bold text-2xl'>Difficulty</h1>
                </div>
                <div className='w-full'>
                    <div className="w-full text-center mt-4">
                        <h1 className='mb-4 font-semibold'>Timer:</h1>
                        <div className='flex justify-evenly w-full'>
                            <label className='optionLevel'>
                                <input type="radio" name="timer" value="2" defaultChecked />
                                <h1>2 Sec</h1>
                            </label>
                            <label className='optionLevel'>
                                <input type="radio" name="timer" value="4" />
                                <h1>4 Sec</h1>
                            </label>
                            <label className='optionLevel'>
                                <input type="radio" name="timer" value="6" />
                                <h1>6 Sec</h1>
                            </label>
                            <label className='optionLevel'>
                                <input type="radio" name="timer" value="8" />
                                 <h1>8 Sec</h1>
                            </label>
                        </div>
                    </div>
                    <div className='w-full text-center mt-4'>
                        <h1 className='mb-4 font-semibold'>Attempts:</h1>
                        <div className='flex justify-evenly w-full'>
                        <label className='optionLevel'>
                                <input type="radio" name="attempts" value="1" defaultChecked />
                                <h1>1 Try</h1>
                            </label>
                            <label className='optionLevel'>
                                <input type="radio" name="attempts" value="2" />
                                <h1>2 Tries</h1>
                            </label>
                            <label className='optionLevel'>
                                <input type="radio" name="attempts" value="3" />
                                <h1>3 Tries</h1>
                            </label>
                            <label className='optionLevel'>
                                <input type="radio" name="attempts" value="4" />
                                <h1>4 Tries</h1>
                            </label>
                        </div>
                        <Link className='mt-4 text-white flex justify-center items-center font-bold cursor-pointer ' href={"/play/"+name+"/"+id}>
                            <h1 className='mt-4 p-3 rounded-md bg-pink-500'>Next</h1>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DifficultyBanner
