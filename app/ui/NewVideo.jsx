'use client';
import { useState } from 'react';

import Image from 'next/image';


const NewVideo = ( { title, thumbnail, src, description, alt } ) => {

  const [show, setShow] = useState('hidden');

  const pauseVideos = (videoList) => {
    for(let i = 0; i < videoList.length; i++){
        videoList[i].pause();
    }
}


  return (
    <div className='flex flex-col items-center gap-y-6'>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        
        <div className="group grid place-items-center [grid-template-areas:'stack'] bg-vvm-pink rounded-md overflow-hidden" onClick={() => setShow('fixed')}>
            <Image src={thumbnail} alt={alt} width={1920} height={1080} className='transition-opacity ease-in-out duration-300 group-hover:opacity-40 group-hover:cursor-pointer [grid-area:stack] object-contain' />
            <p className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 [grid-area:stack] group-hover:cursor-pointer z-[2] px-6 xl:px-28">{description}</p>
        </div>


        <div className={`${show} top-14 left-0 bg-custom-gray/85 w-full h-screen z-[3]`}>

          <div className='max-xl:w-full xl:w-[1280px] flex flex-col-reverse gap-y-6 mx-auto translate-y-36'>

          <video src={src} id='video' controls className='aspect-video w-[1280px]' />

            <div className="hover:cursor-pointer w-8 h-8 ml-auto" onClick={() => {const videos = document.querySelectorAll("video"); pauseVideos(videos); setShow('hidden')}}>
                <span className="block mx-auto w-6 border-b-2 rotate-45 translate-y-4" />
                <span className="block mx-auto w-6 border-b-2 -rotate-45 translate-y-[14px]" />
            </div>

          </div>

        </div>


    </div>
  )
}

export default NewVideo