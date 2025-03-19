import { CloudSunRain, Clapperboard, Video, MoveRight, Icon } from "lucide-react"
import Link from "next/link";
import Button from "../../ui/button";
import { services } from "../../../utils/constants";
import { features } from "process";

export default async function Page({ params }){

    const { slug } = await params;
    const pageInfo = services.filter((obj) => { return obj.slug === slug })[0];

    return (
        <main className="max-lg:mx-10 lg:w-3/5 mx-auto">
            <div className="mt-10 mb-20">
                <h1 className='text-vvm-lightblue'>{pageInfo.name}</h1>
                <h2 className="mt-8">Description</h2>
                <p>{pageInfo.description}</p>
            </div>

            <div className="lg:grid lg:grid-cols-[75%_25%]">
                <div className="lg:max-w-[33vw]">
                    <h1 className='text-vvm-lightblue mt-14 mb-3'>Features</h1>
                    {
                        pageInfo.features.map((feature, index) => (
                            <>
                                <h2 className="flex items-center gap-x-2" key={index}>{feature.title}</h2>
                                <p className="mb-5" key={index}>{feature.description}</p>
                            </>
                        ))
                    }
                </div>
                

                <div className="border-[1px] border-white rounded-[12px] py-5 mt-14 w-80 h-fit mx-auto bg-black">
                    <h2 className="text-vvm-lightblue font-bold ml-12">Services</h2>
                    {
                        services.map((service, index) => (
                            <Link href={`/services/${service.slug}`} key={index}>
                                <div className={`flex items-center mt-5 mx-auto px-5 py-2 w-72 justify-between rounded-[4px] ${service.slug === slug ? 'bg-vvm-pink' : 'bg-custom-gray'}`}>
                                    {service.name}
                                    <MoveRight /> 
                                </div> 
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className='mt-20 mb-6 flex flex-col items-center text-center'>
                <h2 className='text-vvm-lightblue font-bold'>Let's Bring Your Vision to Life</h2>
                <p className='mb-8 text-lg md:text-xl lg:text-2xl'>Pricing is based on the project. Want to know how much your project will cost?</p>
                <Link href={"/contact"}><Button text="Request an Estimate" /></Link>
            </div>
        </main>

    )
}
