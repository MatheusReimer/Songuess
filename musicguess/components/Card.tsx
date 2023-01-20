import React from 'react'
import Image from 'next/image'
import Image1 from "../public/images/playlist.svg"

interface CardData{
    title:string,
    description:string,
    image:any
}

function Card(props:CardData) {
  return (
    <div className='bg-white  w-[350px] h-[525px] text-center rounded-md shadow-lg shadow-black flex flex-col items-center  border-0 justify-evenly text-black '>
        <div className='w-[250px] h-[250px] rounded-full bg-gray-400 flex justify-center  '>
            <Image alt='' src={props.image} width={200} height={200}></Image>
        </div>
        <h1 className='font-bold text-2xl '>{props.title}</h1>
        <p className='font-light text-1xl'>{props.description}</p>

    </div>
  )
}

export default Card