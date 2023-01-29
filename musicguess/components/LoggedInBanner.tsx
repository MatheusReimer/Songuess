import React from 'react'
import {signOut} from 'next-auth/react';
import PlaylistItem from './PlaylistItem';

import defaultPlaylist from "../defaultPlaylists.json"

type recommendations= {
    genres:string[]
}

let x = ["",""]



function LoggedInBanner(data:recommendations) {
    return (
        <div className="flex flex-col w-full h-[90vh] align-middle justify-center items-center text-black ">
            <button className='bg-pink-500 p-2 border-black rounded-md absolute top-7 text-white right-10'
                onClick={
                    () => signOut()
            }>Logout</button>
            <div className='w-[50vw] bg-white h-[55vh] rounded-3xl flex flex-col justify-start items-center'>
                <div className='font-bold text-lg h-[5vh] mt-2 bg-pink-500 p-2 text-center rounded-md text-white'>PLAYLISTS</div>
                <div className='grid grid-cols-6 gap-6 w-full mt-2'>
                    {
                        x.map((element)=>(
                            <PlaylistItem id={""} background={""} playlistName={""} description={""} key={""}/>
                        ))
                    }
          
                </div>
            </div>

        </div>
    )
}

export default LoggedInBanner


