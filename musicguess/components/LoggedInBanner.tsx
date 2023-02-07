import React from 'react'
import {signOut} from 'next-auth/react';

import defaultPlaylist from "../defaultPlaylists.json"
import {Featured, ItemsOfPlaylists} from "../types/featured"
import PlaylistItem from './PlaylistItem';


function LoggedInBanner({items} : {
    items : ItemsOfPlaylists[]
}) {
    
    return (
        <div className="flex flex-col w-full min-h-[90vh] align-middle justify-center items-center text-black ">
            <button className='bg-pink-500 p-2 border-black rounded-md absolute top-7 text-white right-10'
                onClick={
                    () => signOut()
            }>Logout</button>
            <div className='w-[50vw] bg-white h-[55vh] rounded-3xl flex flex-col justify-start items-center overflow-y-scroll'>
                <div className='font-bold text-lg h-[5vh] mt-2 mb-4 text-center rounded-md text-pink-500'>PLAYLISTS FOR YOU</div>
                <div className='grid grid-cols-6 gap-6 w-full mt-2'>
                    {
                    items.map((item : ItemsOfPlaylists) => {
                        
                        return <PlaylistItem 
                            key={item.id}
                            playlistName={item.name!}
                            id={item.id!}
                            description={item.name!}
                            background={item.images?.toString()==undefined ? "" : item.images?.toString()}
                        />
                    })
                    }
                </div>
            </div>

        </div>
    )
}

export default LoggedInBanner
