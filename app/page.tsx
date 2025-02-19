'use client';
import Link from "next/link";
import Image from "next/image";

import Button from "./ui/button";
import CompanyLogos from './ui/CompanyLogos';
import React from "react";

import { Zap, TrendingUp, Eye, RefreshCcw } from 'lucide-react';

export default function Home() {

React.useEffect(() => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show')
      }
    })
  });
  
  const hiddenElements = document.querySelectorAll('.service-item');
  hiddenElements.forEach((el) => observer.observe(el));
  
})




  return (
    
    <main className="flex flex-col w-screen text-center text-white">
      
        {/* Hero Section */}

        <div className="min-h-[80vh] relative">
            <Image src={'/images/ben-collins-SpDOwp6PnBs-unsplash.jpg'} alt="camera 1" objectFit="cover" objectPosition="25% 0%" className="-z-10 opacity-30" fill priority />
            <div className="flex flex-col pl-10 md:pl-16 lg:pl-32 xl:pl-48 2xl:pl-96 translate-y-[40vh] w-fit">
                <h1 className="text-left text-vvm-lightblue">Bringing Your Vision to Life, <br className="md:max-lg:hidden xl:hidden"></br>One Frame at a Time</h1>
                <p className="mb-5 text-left w-3/4 xl:w-3/5 lg:text-2xl">We can help you create impressive video content that will grow your business and help you stand out in a sea of sameness.</p>
                <Link href="/contact" className="w-40"><Button text="Learn How" /></Link>
            </div>
        </div>



        {/* Section 2 */}

        <div className="relative mb-20 pt-10 md:pt-20 border-t-2 border-white">
            <div className="flex flex-col items-center gap-y-2 ">
                <h1 className="max-lg:mt-10 text-vvm-lightblue">Inspire, Engage, and Impress</h1>
                <p className="mb-14 w-4/5 mx-auto text-center lg:text-2xl">Hook your audience, engage their senses, and leave an unforgettable impression with captivating video productions that elevate your brand.</p>
        
        
                <div id="home-service-container" className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 max-lg:gap-y-10 md:max-lg:gap-x-4 lg:gap-y-16 lg:gap-x-16 text-left mb-10 lg:mt-10 2xl:mt-14 md:pl-5 md:pr-9">

                    <div id="service1" className="hero-service-card service-item">
                        <TrendingUp fill="" size={48} absoluteStrokeWidth={true} className="md:hidden "/> 
                        <TrendingUp fill="#ac00e6" size={48} absoluteStrokeWidth={true} className="hero-service-card-icon"/> 
                        <h2 className="text-center mb-4">Promotional</h2>
                        <p className="md:text-center lg:text-2xl">Promote products with visually compelling videos that sell the feeling of having your product</p>
                    </div>

                    <div id="service2" className="hero-service-card service-item">
                        <Zap fill="" size={48} absoluteStrokeWidth={true} className="md:hidden"/>
                        <Zap fill="#ac00e6" size={48} absoluteStrokeWidth={true} className="hero-service-card-icon"/>
                        <h2 className="text-center mb-4">Hype</h2>
                        <p className="md:text-center lg:text-2xl">High-energy videos designed to build excitement around events, launches, products, or services</p>
                    </div>

                    <div id="service3" className="hero-service-card service-item">
                        <Eye fill="" size={48} absoluteStrokeWidth={true} className="md:hidden"/> 
                        <Eye fill="#ac00e6" size={48} absoluteStrokeWidth={true} className="hero-service-card-icon"/> 
                        <h2 className="text-center mb-4">Captivating Thumbnails</h2>
                        <p className="md:text-center lg:text-2xl">Custom-designed thumbnails that grab attention and drive engagement</p>
                    </div>

                    <div id="service4" className="hero-service-card service-item">
                        <RefreshCcw fill="" size={48} absoluteStrokeWidth={true} className="md:hidden"/>
                        <RefreshCcw fill="#ac00e6" size={48} absoluteStrokeWidth={true} className="hero-service-card-icon"/>
                        <h2 className="text-center mb-4">Recurring Content Plan</h2>
                        <p className="md:text-center lg:text-2xl">A tailored solution to streamline ongoing content creation and marketing strategies on a monthly basis</p>
                    </div>

                </div>
        
        
                <Link href="/services"><Button text="View Services" /></Link>
            </div>
        </div>




        <CompanyLogos />
        <div className="flex flex-col items-center gap-y-2 my-20 px-6">
            <h1 className="font-bold text-2xl text-vvm-lightblue">See it for Yourself</h1>
            <p className="mb-6 rounded-full lg:text-2xl">Watch how we've brought our clients' vision to life.</p>
            <Link href="/portfolio"><Button text="View the Vision" /></Link>
        </div>
      
    </main>
    
    
);
}
