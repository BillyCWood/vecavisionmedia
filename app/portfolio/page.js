import Video from '../ui/video.js';
import { videos } from '../../utils/constants';

import Image from "next/image";

export default function Portfolio(){



    return (
        <main className="flex flex-col min-h-screen relative items-center text-center py-10 lg:px-24 bg-[#000]">
            {/* <Image src={'/VVM-bg-images/adrien-olichon-X8o-P23flgI-unsplash.jpg'} alt="background image" style={{objectFit:'cover'}} className='-z-10' fill priority /> */}
            <h1 className="font-extrabold text-2xl mb-10 z-[1] text-vvm-lightblue bg-[#000]/10">Get a Closer Look into our Vision</h1>

            <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-x-6 h-full z-[1]">
                
                {
                    videos.map((vid, index) => (
                        <Video key={index} title={vid.title} thumbnail={vid.thumbnail} src={vid.src} description={vid.description} alt={vid.thumbnailAltText} ifFade={true} />
                    ))
                }
            </div>
            
            <span className='absolute top-0 left-[20%] -z-[0] border-r-4 h-full border-vvm-teal/60 ' />
            <span className='absolute top-0 left-[40%] -z-[0] border-r-4 h-full border-vvm-lightblue/60' />
            <span className='absolute top-0 right-[40%] -z-[0] border-r-4 h-full border-vvm-blue/60' />
            <span className='absolute top-0 right-[20%] -z-[0] border-r-4 h-full border-vvm-pink/60' />

            

        </main>
    );
}