import Video from '../ui/video.js';
import { videos } from '../../utils/constants';

import Image from "next/image";

export default function Portfolio(){



    return (
        <main className="flex flex-col min-h-screen relative items-center text-center py-10 lg:px-24">
            <Image src={'/VVM-bg-images/adrien-olichon-X8o-P23flgI-unsplash.jpg'} alt="background image" style={{objectFit:'cover'}} className='-z-10' fill priority />
            <h1 className="font-extrabold text-2xl mb-10">Get a Closer Look into our Vision</h1>

            <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-x-6 h-full">
                
                {videos.map((vid, index) => (
                    <Video key={index} title={vid.title} thumbnail={vid.thumbnail} src={vid.src} description={vid.description} alt={vid.thumbnailAltText} ifFade={true} />
                ))

                //<Video title={videos[0].title} thumbnail={videos[0].thumbnail} src={videos[0].src} description={videos[0].description} ifFade={true} />

                //<Video title={videos[1].title} thumbnail={videos[1].thumbnail} src={videos[1].src} description={videos[1].description} ifFade={true} />
                }
            </div>

        </main>
    );
}