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
              <div className='embla__slide' key={index}>
                <CldVideoPlayer id={vid.title} width={'1920'} height={'1080'} src={vid.src} poster={vid.cloudinaryThumbnail} className='rounded-2xl' />
              </div>
            ))
          }
        </div>
      </div>
      
      <div className='mt-4'>

        <button className="embla__prev flex" aria-hidden={false} aria-label='video carousel previous button' onClick={scrollPrev}>
          <div>
            <span className='block border-b-4 w-6 -rotate-45 border-white rounded-tr-lg' />
            <span className='block border-b-4 w-6 rotate-45 translate-y-[10px] border-white rounded-br-lg' />
          </div>
          <span className='block border-b-4 w-8 translate-y-[7px] -translate-x-4 border-vvm-white rounded-2xl' />
        </button>
        
        <button className="embla__next rotate-180 translate-y-[3px] float-right" aria-label='video carousel next button' onClick={scrollNext}>
          <span className='block border-b-4 w-8 translate-y-[11px] translate-x-2 border-vvm-white rounded-2xl' />
          <div>
            <span className='block border-b-4 w-6 -rotate-45 border-white rounded-tr-lg' />
            <span className='block border-b-4 w-6 rotate-45 translate-y-[10px] border-white rounded-br-lg' />
          </div>
        </button>
      </div>
    </div>
  )
}

export default VVMCarousel;