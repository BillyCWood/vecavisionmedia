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
        <main className="pb-10 relative">
            <div className='w-screen overflow-hidden relative max-lg:pl-10 py-32'>
                <Image src={'/images/harry-cunningham-7L2h4zTYiNI-unsplash.jpg'} style={{objectFit:'cover'}} fill className='opacity-30 -z-10' alt='studio set'/>
                <div className='w-3/4 lg:mx-auto lg:text-center'>
                    <h1 className='text-vvm-lightblue'>Inspire, Engage, and Impress</h1>
                    <p className=''>Hook your audience, engage their senses, and leave an unforgettable impression with captivating video productions that elevate your brand.</p>
                </div>
            </div>

            <div className='max-md:max-w-96 md:w-10/12 xl:w-3/4 2xl:w-1/2 mx-auto md:max-lg:ml-10 mt-14 max-md:px-6'>
                <h1 className='text-vvm-lightblue mb-4'>Our Services</h1>
                <div className='lg:grid lg:grid-cols-2 lg:gap-10'>

                    {
                        services.map((service, index) => (
                            <div className={`${index==4 ? 'col-span-2 text-center' : ''}`} key={index}>
                                <Link  
                                    href={
                                        {
                                            pathname: service.path,
                                            query: {
                                                name: service.name,
                                                description: service.description, 
                                            }
                                        }
                                    }  
                                    >
                                    <div className={`lg:border-[1px] border-custom-gray hover:border-vvm-pink transition-colors duration-300 rounded-[12px] lg:px-5 ${index==4 ? '' : 'lg:min-h-52 2xl:min-h-56'}`}>

                                        <h2 className={`flex items-center gap-x-2 mt-5 mb-3 ${index==4 ? 'w-fit lg:mx-auto' : ''}`}>{service.name} <SquareArrowOutUpRight size={20} color='#ac00e6' /></h2>
                                        <p className='pb-6'>{service.summary}</p>
                                        <div className='h-0 w-full max-lg:border-b-2 border-white' />
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>

                
            </div>
            <div className='mt-20 mb-6 flex flex-col items-center text-center'>
                <h2 className='text-vvm-lightblue font-bold'>Let's Bring Your Vision to Life</h2>
                <p className='mb-8 text-lg md:text-xl lg:text-2xl mx-8'>Pricing is based on the project. Want to know how much your project will cost?</p>
                <Link href={"/contact"}><Button text="Request an Estimate" /></Link>
            </div>
            
        </main>
    );
}