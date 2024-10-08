"use client";
import { useState } from "react";
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Video({ title, thumbnail, src, description, ifFade }) {



    const [isVisible, setIsVisible] = useState('hidden');


    const pauseVideos = (videoList) => {
        for(let i = 0; i < videoList.length; i++){
            videoList[i].pause();
        }
    }


    return(
        <div className="mb-10">
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <div className="group rounded-2xl grid place-items-center [grid-template-areas:'stack'] overflow-hidden bg-vvm-pink max-h-[700px]" onClick={() => setIsVisible('fixed')}>
                <img className={`rounded-2xl aspect-auto ${ifFade ? 'group-hover:opacity-60' : '' } ease-in-out duration-200 group-hover:cursor-pointer [grid-area:stack] object-cover`} width={"100%"} height={"100%"} src={thumbnail} />
                <p className="hidden lg:block opacity-0 group-hover:opacity-100 group-hover:z-10 ease-in-out duration-200 px-6 [grid-area:stack]">{description}</p>
            </div>
        
            <div className={`${isVisible} w-full h-screen left-0 top-14 pt-60 px-4 bg-custom-gray bg-opacity-85 z-10`}>
                <div className="flex flex-col gap-y-6 w-2/3 mx-auto -translate-y-36">
                    <div className="hover:cursor-pointer ml-auto float-right" onClick={() => {const videos = document.querySelectorAll("video"); pauseVideos(videos); setIsVisible('hidden')}}>
                        <span className="block w-6 border-b-2 rotate-45" />
                        <span className="block w-6 border-b-2 -rotate-45 -translate-y-0.5" />
                    </div>
                    
                        {
                            /*<iframe className={`rounded-2xl aspect-video`} src={src} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe>*\
                            <video id="video" className={`${title.replace(/'+/g).trim()} rounded-2xl aspect-video`} width="" height="" controls preload="none">
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                            */
                        }
                        <CldVideoPlayer 
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