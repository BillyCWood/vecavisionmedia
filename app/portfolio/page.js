import Video from "../ui/video.js";

export default function Portfolio(){



    return (
        <main className="flex flex-col min-h-screen items-center text-center pt-10 pb-10 bg-gradient-to-b from-vvm-pink to-vvm-blue">
            
            <h1 className="font-extrabold text-2xl mb-10">Get a Closer Look into our Vision</h1>

            <div className="grid grid-cols-1 px-10 md:grid-cols-2 gap-x-6">
                    
                <Video title={"Jack Daniel's"} thumbnail={"/thumbnails/JackDanielsThumbnail.jpg"} src={"https://www.youtube.com/embed/AmPbyapO-vY?si=_8HFi-C46_zWWEqm&rel=0"} description={"A little bit of honey, a whole lot of jack. A blend of Jack Daniel’s Tennessee Whiskey and a unique honey liqueur combines for a taste that’s one-of-a-kind and unmistakably Jack. With hints of honey and a finish that’s naturally smooth, Jack Daniel’s Tennessee Honey offers a taste of the unexpected."}  />

                <Video title={"Kellog's Special"} thumbnail={"/thumbnails/SpecialKThumbnail.jpg"} src={"https://www.youtube.com/embed/ZQYGPegKTgo?si=Im9TEhOrAg1f1AWz&rel=0"} description={"This cereal is bursting with red berries. People have fallen for Special K® Red Berries Cereal. With rice and wheat flakes and crunchy fruity goodness, what's not to love? It's a bright, flavorful breakfast and perfect for afternoon and late-night snacks, too."} />

            </div>

        </main>
    );
}