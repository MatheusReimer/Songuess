import React from 'react'
import Link from 'next/link'

function PlaylistItem({playlistName,id,description,background} : { playlistName : string, id : string, description : string, background : string}) {
    return (
        <Link className='flex-col justify-center flex text-center items-center cursor-pointer mb-6' href={"/difficulty/"+playlistName+"/"+id}>
            <div className=' w-[100px] h-[100px] rounded-full' style={{backgroundImage: `url(${background})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
            <p className='mt-2'>{playlistName}</p>
        </Link>

    )
}

export default PlaylistItem
