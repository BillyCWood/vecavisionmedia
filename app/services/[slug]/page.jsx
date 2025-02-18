import { CloudSunRain, Clapperboard, Video, MoveRight } from "lucide-react"
import Link from "next/link";
import Button from "../../ui/button";
import { services } from "../../../utils/constants";

const page = ({ searchParams }) => {


    const data = searchParams.pageData;
    console.log(data);

    return (
        <main className="mx-10">
            <div className="mt-10">
                
            <h1 className='text-vvm-lightblue'>{searchParams.name}</h1>
            <h2 className="mt-8">Description</h2>
            <p>{searchParams.description}</p>
            </div>

            <h1 className='text-vvm-lightblue mt-14 mb-3'>Features</h1>
            <h2 className="flex items-center gap-x-2"><Clapperboard size={24} />Full Set Production</h2>
            <p className="mb-5">End-to-end video creation, from pre-production planning to on-set shooting and detailed post-production editing.</p>

            <h2 className="flex items-center gap-x-2"><CloudSunRain size={24} />Film in All Environments</h2>
            <p className="mb-5">Sunshine, wind, rain, or snow, we'll brave the elements to get the shot of your dreams.</p>

            <h2 className="flex items-center gap-x-2"><Video size={24} />Versatile Creativity</h2>
            <p className="mb-5">We will bring your unique ideas to life by providing versatile video solutions for any need that doesn't fit into one of our categories.</p>

            <div className="border-[1px] border-white rounded-[12px] py-5 mt-14 w-96 mx-auto">
                <h2 className="text-vvm-lightblue font-bold ml-12">Services</h2>
                {
                    services.map((service, index) => (
                        <Link href={{
                            pathname: service.path,
                            query: {
                                name: service.name,
                                description: service.description, 
                            }
                        }} key={index}>
                            <div className={`flex items-center mt-5 mx-auto px-5 py-2 w-72 justify-between rounded-[4px] ${searchParams.name == service.name ? 'bg-vvm-pink' : 'bg-custom-gray'}`}>
                                {service.name}
                                <MoveRight /> 
                            </div> 
                        </Link>
                    ))
                }
            </div>

            <div className='mt-20 mb-6 flex flex-col items-center text-center'>
                <h2 className='text-vvm-lightblue font-bold'>Let's Bring Your Vision to Life</h2>
                <p className='mb-8 text-lg md:text-xl lg:text-2xl mx-32'>Pricing is based on the project. Want to know how much your project will cost?</p>
                <Link href={"/contact"}><Button text="Request an Estimate" /></Link>
            </div>
        </main>

    )
}

export default page