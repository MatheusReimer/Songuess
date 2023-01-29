import React from 'react'
import { PlaylistTypes, Playlists } from '../types/types'

function PlaylistItem({playlistName,id,description,background}:PlaylistTypes) {
    return (
        <div className='flex-col justify-center flex text-center items-center cursor-pointer'>
            <div className='bg-black w-[100px] h-[100px] rounded-full'></div>
            <p className='mt-2'>{playlistName}</p>
        </div>

    )
}

export default PlaylistItem
