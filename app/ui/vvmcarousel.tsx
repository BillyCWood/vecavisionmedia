"use client";

import React, { useCallback, useEffect } from 'react'


import { featuredVideos } from '../../utils/constants.js'

import useEmblaCarousel from 'embla-carousel-react'

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';


const VVMCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div className="embla">
      <div className='embla__viewport' ref={emblaRef}>
        <div className="embla__container">
          {
            featuredVideos.map((vid, index) => (
              <div className='embla__slide border__gradient' key={index}>
                <CldVideoPlayer id={vid.title} width={'1920'} height={'1080'} src={vid.src} poster={vid.cloudinaryThumbnail} className='' />
              </div>
            ))
          }
        </div>
      </div>
      
      <div className='mt-4 flex h-14 justify-between'>

        <button className="embla__prev hover:bg-custom-gray hover:opacity-65 rounded-xl" aria-hidden={false} aria-label='video carousel previous button' onClick={scrollPrev}>
          <div className='flex'>
            <div className='flex flex-col'>
              <span className='border-b-4 border-white w-6 rounded-br-full max-h-0 -rotate-45 -translate-y-[6px]'/>
              <span className='border-b-4 border-white w-6 rounded-br-full max-h-0 rotate-45 translate-y-[6px]'/>
            </div>
            <span className='border-b-4 border-white w-10 rounded-full max-h-0 translate-y-[2px] -translate-x-[18px]'/>
          </div>
        </button>
        
        <button className="embla__next hover:bg-custom-gray hover:opacity-65 rounded-xl rotate-180" aria-label='video carousel next button' onClick={scrollNext}>
        <div className='flex'>
            <div className='flex flex-col'>
              <span className='border-b-4 border-white w-6 rounded-br-full max-h-0 -rotate-45 -translate-y-[6px]'/>
              <span className='border-b-4 border-white w-6 rounded-br-full max-h-0 rotate-45 translate-y-[6px]'/>
            </div>
            <span className='border-b-4 border-white w-10 rounded-full max-h-0 translate-y-[2px] -translate-x-[18px]'/>
          </div>
        </button>
      </div>
    </div>
  )
}

export default VVMCarousel;