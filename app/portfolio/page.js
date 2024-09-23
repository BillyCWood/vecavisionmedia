import Video from '../ui/video.js';
import VideoSelf from '../ui/videoSelf.js';
import { videos } from '../../utils/constants';

export default function Portfolio(){



    return (
        <main className="flex flex-col min-h-screen items-center text-center pt-10 pb-10 bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url('/VVM-bg-images/adrien-olichon-X8o-P23flgI-unsplash.jpg')"}}>
            
            <h1 className="font-extrabold text-2xl mb-10">Get a Closer Look into our Vision</h1>

            <div className="grid grid-cols-1 px-10 md:grid-cols-2 gap-x-6 h-full">
                
                {videos.map((vid, index) => (
                    <Video key={index} title={vid.title} thumbnail={vid.thumbnail} src={vid.src} description={vid.description} ifFade={true} />
                ))

                //<Video title={videos[0].title} thumbnail={videos[0].thumbnail} src={videos[0].src} description={videos[0].description} ifFade={true} />

                //<Video title={videos[1].title} thumbnail={videos[1].thumbnail} src={videos[1].src} description={videos[1].description} ifFade={true} />
                }
            </div>

        </main>
    );
}