"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Nav() {
    
    
    const [isOpen, setIsOpen] = useState(false);
    
    
    return(
        <div>
            <div className="hidden z-20 lg:flex bg-black border-b border-white justify-evenly items-center lg:px-24 xl:px-72">
                <Link href="/" className="group flex items-center">
                    <Image src="/VVM-images/Veca-Vision2.png" alt="logo" width={75} height={75} className="m-0 p-0 group-hover:grayscale group-hover:ease-in-out group-hover:duration-300" />
                    <span className="group-hover:text-vvm-lightblue  group-hover:ease-in-out group-hover:duration-300" >Veca Vision Media</span>
                </Link>
                
                <Link href="/services" className="hover:text-vvm-teal relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-teal after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Services</Link>
                <Link href="/portfolio" className="hover:text-vvm-lightblue relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-lightblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Portfolio</Link>
                <Link href="/about" className="hover:text-vvm-blue relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</Link>
                <Link href="/contact" className="hover:text-vvm-pink relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-pink after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</Link>
                
                
            </div>
            <div className="flex lg:hidden z-20 sticky top-0 bg-black border-b border-white px-6 justify-between">
                <Link href="/" className="flex items-center ease-in-out duration-300">
                    <Image src="/VVM-images/Veca-Vision2.png" alt="logo" width={75} height={75} className="m-0 p-0" />
                </Link>
                <button className={`${ isOpen ? 'space-y-0 content-center' : 'space-y-2 content-center' } `} onClick={ () => setIsOpen(!isOpen) }>
                    <span className={ `block w-6 border-b ${ isOpen ? 'rotate-[225deg] duration-500' : 'rotate-0 duration-500' } `} />
                    <span className={ `block w-6 border-b ${ isOpen ? '-rotate-[225deg] duration-500 -translate-y-px' : 'rotate-0 duration-500' } `} />
                </button>
            </div>
            <div className={ `lg:hidden w-screen float-right bg-black ${ isOpen ? 'flex flex-col' : 'hidden' }` }>
                <Link href="/services" className="text-right py-4 pr-6 my-3 border-b border-vvm-pink">Services</Link>
                <Link href="/portfolio" className="text-right py-4 pr-6 mb-3 border-b border-vvm-teal">Portfolio</Link>
                <Link href="/about" className="text-right py-4 pr-6 mb-3 border-b border-vvm-blue">About</Link>
                <Link href="/contact" className="text-right py-4 pr-6 border-b border-white">Contact</Link>
            </div>
        </div>
    );
}