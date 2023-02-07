import React from 'react'
import {signOut} from 'next-auth/react';
import SongOptions from './SongOptions';
import {PlayCircleIcon} from '@heroicons/react/24/solid';
import ReactAudioPlayer from 'react-audio-player';
import SpotifyPlayer from 'spotify-web-playback';




async function play(token:string){
    const uri = 'spotify:track:54flyrjcdnQdco7300avMJ';
    console.log(token)
    const spotify = new SpotifyPlayer("test",1.0);

    await spotify.connect(token);

    spotify.play(uri);
    
}

function PlayBanner({id,name,token} : {id : string|undefined, name : string|undefined, token : string|undefined}) {




    return (<div className="flex flex-col w-full min-h-[90vh] align-middle justify-center items-center text-black ">
        <button className='bg-pink-500 p-2 border-black rounded-md absolute top-7 text-white right-10'
            onClick={
                () => signOut()
        }>Logout</button>
        <div className='w-[30vw] bg-[#161616] h-[55vh] rounded-3xl flex flex-col items-center  overflow-y-scroll'>
            <div className='h-full bg-[url("https://m.media-amazon.com/images/I/61HhTXFUEFL._SL1437_.jpg")] w-full bg-cover bg-no-repeat bg-center'></div>
            <h1 className='mt-2'>{name}</h1>
            <div className='mt-4 border-white border-2 w-4/5'>
                <hr></hr>
            </div>
            <ReactAudioPlayer id="audio" src="my_audio_file.ogg" autoPlay controls onPlay={()=>{}}/>
            <div className='flex justify-evenly w-full align-middle h-1/3 items-center'>
                <SongOptions/>
                <SongOptions/>
                <SongOptions/>
                <SongOptions/>
            </div>
            <button onClick={()=>{}}>aaaaaaa</button>
        </div>

    </div>)
}

export default PlayBanner
