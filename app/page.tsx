'use client';
import Link from "next/link";
import Image from "next/image";

import Button from "./ui/button";
import VVMCarousel from "./ui/vvmcarousel";
import React from "react";


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
    
    <main className="flex flex-col w-screen text-center text-[#fff]">
      
       {/* Hero Section */}

      <div className="min-h-screen relative lg:border-b-2 border-vvm-pink">
        <Image src={'/images/robert-shunev-mS1nlYbq1kA-unsplash.jpg'} alt="camera 1" style={{objectFit:"cover"}} quality={75} className="-z-10 max-lg:opacity-65" fill priority />
        <div className="flex flex-col items-center gap-y-2 pt-32 px-10 md:px-24 lg:px-48">
          <h1 className="font-bold text-2xl text-vvm-lightblue">Bringing your vision to life, one frame at a time</h1>
          <p className="mb-6 text-left">72% of customers say they prefer learning about a product or service through video. We can help you create impressive video content to grow your business and give customers the desire to have your product or service.</p>
          <Link href="/contact"><Button text="Learn How" /></Link>
        </div>
      </div>



      {/* Section 2 */}

      <div className="min-h-screen relative mb-16">
        <Image src={'/images/theregisti-HSXIp58yPyI-unsplash.jpg'} alt="camera 1" style={{objectFit:"cover"}} quality={75} className="max-lg:hidden -z-10 opacity-50" fill priority />
        <div className="flex flex-col items-center gap-y-2 lg:pt-32 px-6">
        <h1 className="font-bold text-2xl text-vvm-lightblue">Inspire, Engage, and Impress</h1>
        <p className="mb-14 px-5 lg:w-3/5 mx-auto text-left">Hook your audience, engage their senses, and leave an unforgettable impression with captivating video productions that elevate your brand.</p>
        
        
        <div id="home-service-container" className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 max-lg:gap-y-10 text-left mb-10 lg:mt-10 2xl:mt-14">
          <div id="service1" className="w-96 border-b-2 lg:border-r-2 border-white pb-10 mx-auto service-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="mx-auto w-8 mb-2">
              <path fill="white" d="M576 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352c0-17.7 14.3-32 32-32zM352 224l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32zM96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>
            </svg>
            <h1 className="text-xl text-center mb-4">Promotional</h1>
            <p className="lg:px-14">Promote products with visually compelling videos that sell the feeling of having your product</p>
          </div>
          <div id="service2" className="w-96 border-b-2 border-white pb-10 mx-auto service-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 mx-auto mb-2">
              <path fill="white" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/>
            </svg>
            <h1 className="text-xl text-center mb-4"> Hype</h1>
            <p className="lg:px-14">High-energy videos designed to build excitement around events, launches, or products / services</p>
          </div>
          <div id="service3" className="w-96 max-lg:border-b-2 lg:border-r-2 border-white pb-10 mx-auto lg:py-5 service-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-8 mx-auto mb-2">
              <path fill="white" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/>
            </svg>
            <h1 className="text-xl text-center mb-4">Captivating Thumbnails</h1>
            <p className="lg:px-14">Custom-designed thumbnails that grab attention and drive engagement</p>
          </div>
          <div id="service4" className="w-96 max-lg:border-b-2 border-white pb-10 mx-auto lg:py-5 service-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 mx-auto mb-2">
              <path fill="white" d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z"/>
            </svg>
            <h1 className="text-xl text-center mb-4">Recurring Content Plan</h1>
            <p className="lg:px-14">A tailored solution to streamline ongoing content creation and marketing strategies on a monthly basis</p>
          </div>
        </div>
        
        
        <Link href="/services"><Button text="View Services" /></Link>
        </div>
      </div>



      {/* Section 3 */}

      <div className="min-h-screen relative md:hidden">
        <Image src={'/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg'} alt="camera 1" style={{objectFit:"cover"}} quality={75} className="-z-10 opacity-65" fill priority />
        <div className="flex flex-col items-center gap-y-2 pt-32 px-6">
          <h1 className="font-bold text-2xl text-vvm-lightblue">See it for Yourself</h1>
          <p className="mb-6 rounded-full">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio"><Button text="View the Vision" /></Link>
        </div>
      </div>


      <div className="hidden md:max-lg:flex flex-col min-h-screen">
        
        <Image src={'/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg'} alt="camera 1" width={960} height={960} />
        
        <div className="flex flex-col items-center gap-y-2 pt-24 px-16">
          <h1 className="font-bold text-2xl text-vvm-lightblue">See it for Yourself</h1>
          <p className="mb-6 rounded-full">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio"><Button text="View the Vision" /></Link>
        </div>
      </div>


      <div className="hidden min-h-screen max-h-screen lg:max-2xl:flex flex-col justify-evenly my-14">

        <div className="relative mx-auto">
          <div className="bg-vvm-blue w-full h-[480px] absolute top-0 left-0 -translate-y-8 -translate-x-8 shadow-md shadow-vvm-pink"></div>
          <Image src={'/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg'} alt="camera 2" width={720} height={1} className="relative z-[1] shadow-custom-gray shadow-lg" />
          <div className="bg-vvm-pink w-full h-[480px] absolute top-0 left-0 translate-y-8 translate-x-8 shadow-md shadow-vvm-blue"></div>
          
        </div>

        
        <div className="mx-auto w-1/2 gap-y-2 flex flex-col items-center">
          <h1 className="font-bold text-2xl text-vvm-lightblue">See it for Yourself</h1>
          <p className="mb-6 rounded-full">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio"><Button text="View the Vision" /></Link>
        </div>
    
      </div>


      <div className="hidden min-h-screen max-h-screen 2xl:flex justify-evenly my-14">

        <div className="max-lg:mx-auto w-1/2 lg:w-1/4 lg:mt-80 gap-y-2 flex flex-col">
          <h1 className="font-bold text-2xl text-vvm-lightblue text-left">See it for Yourself</h1>
          <p className="mb-6 pr-16 rounded-full text-left">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio"><Button text="View the Vision" /></Link>
        </div>


        <div className="relative pt-44">
          <div className="bg-vvm-blue w-full h-[640px] absolute top-0 left-0 translate-y-36 -translate-x-8 shadow-md shadow-vvm-pink"></div>
          <Image src={'/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg'} alt="camera 2" width={960} height={960} className="relative z-[1] shadow-custom-gray shadow-lg" />
          <div className="bg-vvm-pink w-full h-[640px] absolute top-0 left-0 translate-y-52 translate-x-8 shadow-md shadow-vvm-blue"></div>
          
        </div>    
        
    
      </div>
      
    </main>
    
 
  );
}
