import React from 'react'
import Card from './Card'
import Playlist from "../public/images/playlist.svg"
import Music from "../public/images/music.svg"
import Player from "../public/images/player.svg"


function Guide() {
    return (
        <div className="flex w-full h-[90vh] align-middle justify-center items-center text-black ">
            <div className='w-[70vw] bg-white h-[75vh] rounded-3xl text-center'>
                <div className='font-semibold text-2xl h-[4vh] mt-4'>How Does It Work</div>
                    <div className='flex justify-between m-10'>
                    <Card description='Select the playlist in which you are most familiar with the songs' image={Playlist} title='Select Your Favorite Playlist'></Card>
                    <Card description='Listen to the snippet of a random song' image={Music} title='Hear The Snippet'></Card>
                    <Card description='Get ready, what song was it: ' image={Player} title='Choose What Song The Snippet Belong To '></Card>
                    </div>
                    <div className='justify-center align-middle flex'>
                    <a href='/' className='text-white'>
                            <div className='h-8 w-[200px] bg-pink-500   mt-4 font-bold rounded-full flex justify-center items-center cursor-pointer border-black border-2'>GO BACK</div>
                    </a>
                    </div>


                

              

            </div>

        </div>
    )
}

export default Guide
