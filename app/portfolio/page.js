


export default function Portfolio(){
    return (
        <main className="flex flex-col min-h-screen items-center text-center pt-10 pb-10 bg-gradient-to-b from-vvm-pink to-vvm-blue">
            
            <h1 className="font-extrabold text-2xl mb-10">Get a Closer Look into our Vision</h1>

            <div className="grid grid-cols-2 gap-x-6">
                <div className="mb-10">
                    <h1 className="text-xl">Jack Daniel's</h1>
                    <iframe className="rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/AmPbyapO-vY?si=_8HFi-C46_zWWEqm&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>    
            


                <div className="mb-10">
                    <h1 className="text-xl">Kellog's Special</h1>
                    <iframe className="rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/ZQYGPegKTgo?si=Im9TEhOrAg1f1AWz&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </main>
    );
}