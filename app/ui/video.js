"use client";
import { useState } from "react";
import Image from "next/image";
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Video({ title, thumbnail, src, description, alt, ifFade }) {



    const [isVisible, setIsVisible] = useState('hidden');


    const pauseVideos = (videoList) => {
        for(let i = 0; i < videoList.length; i++){
            videoList[i].pause();
        }
    }


    return(
        <div className="mb-10">
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <div className="group rounded-2xl grid place-items-center [grid-template-areas:'stack'] overflow-hidden max-h-[720px] bg-vvm-pink" onClick={() => setIsVisible('fixed')}>
                <Image className={`rounded-2xl aspect-auto ${ifFade ? 'group-hover:opacity-45' : '' } ease-in-out duration-200 group-hover:cursor-pointer [grid-area:stack] object-contain`} width={1920} height={1080} src={thumbnail} alt={alt} />
                <p className="hidden lg:block opacity-0 group-hover:opacity-100 group-hover:z-[1] group-hover:cursor-pointer ease-in-out duration-200 px-6 xl:px-28 [grid-area:stack] text-left">{description}</p>
            </div>
        
            <div className={`${isVisible} w-full h-screen left-0 top-14 pt-60 px-4 bg-custom-gray bg-opacity-85 z-10`}>
                <div className="flex flex-col gap-y-6 w-2/3 mx-auto -translate-y-36">
                    <div className="hover:cursor-pointer ml-auto float-right" onClick={() => {const videos = document.querySelectorAll("video"); pauseVideos(videos); setIsVisible('hidden')}}>
                        <span className="block w-6 border-b-2 rotate-45" />
                        <span className="block w-6 border-b-2 -rotate-45 -translate-y-0.5" />
                    </div>
                    
                        <CldVideoPlayer
                            id={title}
                            width="1920"
                            height="1080"
                            src={src}
                            className="rounded-2xl"
                        />
                        
                </div>
            </div>
        
        </div>
    );

}