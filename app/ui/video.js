"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function Video({title, thumbnail, src, description, ifFade}) {

    const [isVisible, setIsVisible] = useState('hidden');


    
    /* function togglePlay() {
        useEffect(() => {
            const video = document.querySelector('video');
            video.pause();
        } , [])
        setIsVisible('hidden')
    } */

    return(
        <div className="mb-10">
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <div className="group rounded-2xl grid place-items-center [grid-template-areas:'stack'] overflow-hidden bg-vvm-pink" onClick={() => setIsVisible('fixed')}>
                <img className={`rounded-2xl aspect-auto ${ifFade ? 'group-hover:opacity-60' : '' } ease-in-out duration-200 group-hover:cursor-pointer [grid-area:stack]`} src={thumbnail} />
                <p className="hidden lg:block opacity-0 group-hover:opacity-100 group-hover:z-10 ease-in-out duration-200 px-6 [grid-area:stack]">{description}</p>
            </div>
        
            <div className={`${isVisible} w-full h-screen left-0 top-14 pt-60 px-4 bg-custom-gray bg-opacity-85 z-10`}>
                <div className="flex flex-col gap-y-6 w-2/3 mx-auto md:-translate-y-24">
                    <div className="hover:cursor-pointer ml-auto float-right" onClick={() => {document.querySelector('video').pause(); setIsVisible('hidden')}}>
                        <span className="block w-6 border-b-2 rotate-45" />
                        <span className="block w-6 border-b-2 -rotate-45 -translate-y-0.5" />
                    </div>
                    {
                        //<iframe className={`rounded-2xl aspect-video`} src={src} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        <video id="video" className="rounded-2xl aspect-video" width="" height="" controls preload="none">
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    }
                </div>
            </div>
        
        </div>
    );

}