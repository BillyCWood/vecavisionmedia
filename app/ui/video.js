"use client";
import { useState } from "react";

export default function Video({title, thumbnail, src, description}) {

    const [isVisible, setIsVisible] = useState('hidden');

    return(
        <div className="mb-10">
            <h1 className="text-xl mb-2">{title}</h1>
            <div className="group rounded-2xl hover:z-0  grid place-items-center [grid-template-areas:'stack']" onClick={() => setIsVisible('absolute')}>
                <img className="rounded-2xl aspect-auto group-hover:bg-vvm-pink group-hover:opacity-60 ease-in-out duration-200 group-hover:cursor-pointer [grid-area:stack]" src={thumbnail} />
                <p className="hidden lg:block z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-200 px-6 [grid-area:stack]">{description}</p>
            </div>
        
            <div className={`${isVisible} w-full h-full absolute left-0 top-0 pt-60 px-4 bg-custom-gray bg-opacity-85`}>
                <div className="flex flex-col gap-y-6">
                    <div className="hover:cursor-pointer ml-auto float-right" onClick={() => setIsVisible('hidden')}>
                        <span className="block w-6 border-b-2 rotate-45" />
                        <span className="block w-6 border-b-2 -rotate-45 -translate-y-0.5" />
                    </div>
                    <iframe className={`rounded-2xl aspect-video`} src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        
        </div>
    );

}