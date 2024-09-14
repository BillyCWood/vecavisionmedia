import Video from "../ui/video.js";

export default function Portfolio(){



    return (
        <main className="flex flex-col min-h-screen items-center text-center pt-10 pb-10 bg-gradient-to-b from-vvm-pink to-vvm-blue">
            
            <h1 className="font-extrabold text-2xl mb-10">Get a Closer Look into our Vision</h1>

            <div className="grid grid-cols-1 px-10 md:grid-cols-2 gap-x-6">
                    
                <Video title={"Jack Daniel's"} thumbnail={"/thumbnails/JackDanielsThumbnail.jpg"} src={"https://www.youtube.com/embed/AmPbyapO-vY?si=_8HFi-C46_zWWEqm&rel=0"} description={""}  />

                <Video title={"Kellog's Special"} thumbnail={"/thumbnails/SpecialKThumbnail.jpg"} src={"https://www.youtube.com/embed/ZQYGPegKTgo?si=Im9TEhOrAg1f1AWz&rel=0"} description={""} />

            </div>

        </main>
    );
}