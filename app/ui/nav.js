"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Nav() {
    
    
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
    setIsOpen(!isOpen);
    }
    
    return(
        <div>
            <div className="hidden md:flex z-10 sticky top-0 bg-[#000] border-b border-white justify-between items-center md:pl-10 md:pr-48 xl:pl-96 xl:pr-96">
                <Link href="/" className="flex items-center grayscale hover:grayscale-0 hover:text-vvm-lightblue ease-in-out duration-300">
                    <Image src="/VVM-images/Veca-Vision2.png" alt="/" width={75} height={75} className="m-0 p-0" />
                    Veca Vision Media
                </Link>
                <div className="flex justify-between w-1/4 space-x-6">
                    <Link href="/services" className="hover:text-vvm-teal relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-teal after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Services</Link>
                    <Link href="/portfolio" className="hover:text-vvm-lightblue relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-lightblue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Portfolio</Link>
                    <Link href="/about" className="hover:text-vvm-blue relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</Link>
                    <Link href="/contact" className="hover:text-vvm-pink relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-vvm-pink after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</Link>
                </div>
            </div>
            <div className="flex md:hidden z-10 sticky top-0 bg-[#000] border-b border-white pl-6 pr-6 justify-between">
                <Link href="/" className="flex items-center ease-in-out duration-300">
                    <Image src="/VVM-images/Veca-Vision2.png" alt="/" width={75} height={75} className="m-0 p-0" />
                </Link>
                <div className="space-y-2 content-center" onClick={handleClick}>
                    <span className="block w-6 border-b" />
                    <span className="block w-6 border-b" />
                </div>
            </div>
            <div className="${isOpen ? flex flex-col pt-10 space-y-10 : hidden}">
                <Link href="/services" className="relative w-fit">Services</Link>
                <Link href="/portfolio" className="relative w-fit">Portfolio</Link>
                <Link href="/about" className="relative w-fit">About</Link>
                <Link href="/contact" className="relative w-fit">Contact</Link>
            </div>
        </div>
    );
}