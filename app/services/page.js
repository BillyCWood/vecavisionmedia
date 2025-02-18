import Button from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SquareArrowOutUpRight } from 'lucide-react';
import { services } from '../../utils/constants';
 
export const metadata = {
  title: 'Services',
};


export default function Services(){
    return (
        <main className="pb-10  relative">
            <div className='w-screen h-1/4 overflow-hidden relative pl-10 py-32'>
                <Image src={'/images/harry-cunningham-7L2h4zTYiNI-unsplash.jpg'} style={{objectFit:'cover'}} fill className='opacity-30 -z-10' alt='studio set'/>
                <h1 className='text-vvm-lightblue text-left'>Inspire, Engage, and Impress</h1>
                <p className='w-3/4'>Hook your audience, engage their senses, and leave an unforgettable impression with captivating video productions that elevate your brand.</p>
            </div>

            <div className='max-w-96 mx-auto mt-14'>
                <h1 className='text-vvm-lightblue mb-4'>Our Services</h1>
                {
                    services.map((service, index) => (
                        <Link href={{
                            pathname: service.path,
                            query: {
                                name: service.name,
                                description: service.description, 
                            }
                        }} key={index} >
                            <h2 className='flex items-center gap-x-2 mt-5 mb-3'>{service.name} <SquareArrowOutUpRight size={20} color='#ac00e6' /></h2>
                            <p className='pb-6'>{service.summary}</p>
                            <div className='h-0 w-full border-b-2 border-white' />
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
    );
}