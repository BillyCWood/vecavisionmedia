'use client';
import { useState } from "react";
import Filtered from '../ui/portfolio/Filtered';
import { categories } from "../../utils/constants";


export default function Portfolio() {

  const [category, setCategory] = useState('');
  const [show, setShow] = useState(false);

  return (
    <main className="min-h-screen">
        <div className="hidden lg:flex mt-6 ml-10">
            <button className="bg-white border-[2px] border-white text-black hover:bg-[#aaa] hover:text-white transition-colors duration-300 ease-linear p-2 w-40 rounded-3xl z-[1]" onClick={()=> {setShow(!show); console.log(show)}}>Search by topic</button>
            {
                // The "javascript-esque" way of making the buttons I implemented earlier does not work
                // because Tailwind does not support dynamic classes... SO BACK TO THE ORIGINAL WAY; IF IT AINT BROKE DON'T FIX IT!
            }
            <div className={`z-0 flex gap-x-4 ml-6`}>
                <button className={`portfolio-filter-button bg-[#4d0066] border-[#4d0066] hover:text-[#4d0066] ${show ?  'translate-x-0' : '-translate-x-[152px]'}`} onClick={() => {setCategory('product'); setShow(!show)}}>Product</button>
                <button className={`portfolio-filter-button bg-[#01417c] border-[#01417c] hover:text-[#01417c] ${show ?  'translate-x-0' : '-translate-x-[300px]'}`} onClick={() => {setCategory('service'); setShow(!show)}}>Service/Brand</button>
                <button className={`portfolio-filter-button bg-[#017c64] border-[#017c64] hover:text-[#017c64] ${show ?  'translate-x-0' : '-translate-x-[450px]'}`} onClick={() => {setCategory('real estate'); setShow(!show)}}>Real Estate</button>
                <button className={`portfolio-filter-button bg-[#1b5c78] border-[#1b5c78] hover:text-[#1b5c78] ${show ?  'translate-x-0' : '-translate-x-[600px]'}`} onClick={() => {setCategory('industrial'); setShow(!show)}}>Industrial</button>
                <button className={`portfolio-filter-button bg-white border-white text-black hover:bg-[#aaa] hover:text-white ${show ?  'translate-x-0' : '-translate-x-[750px]'}`} onClick={() => {setCategory(''); setShow(!show)}}>Clear</button>
            </div>
        </div>

        <div className="flex flex-col mt-10 py-2 w-96 mx-auto lg:hidden items-center">
            <button className={`group py-4 bg-white border-[2px] border-white text-black hover:bg-[#aaa] hover:text-white w-56 ${show ? 'rounded-t-3xl' : 'rounded-3xl'} transition-all duration-300 ease-linear flex items-center justify-center z-[1]`} onClick={()=> {setShow(!show)}}>Search by topic <span className="block border-b-2 group-hover:border-b-white transition-colors duration-500 border-b-black w-2 rotate-45 translate-y-[1px] translate-x-[3px]" /><span className="block border-b-2 group-hover:border-b-white transition-colors duration-500 border-b-black w-2 -rotate-45 translate-y-[1px]" /></button>
            <div className={`w-56 mx-auto z-0 ${show ? '' : 'h-0'}`}>

                <button className={`portfolio-filter-button-responsive bg-[#4d0066] border-[#4d0066] hover:text-[#4d0066] ${show ?  'translate-y-0' : 'opacity-0 -translate-y-[60px] rounded-3xl'}`} onClick={() => {setCategory('product'); setShow(!show)}}>Product</button>
                <button className={`portfolio-filter-button-responsive bg-[#01417c] border-[#01417c] hover:text-[#01417c] ${show ?  'translate-y-0' : '-translate-y-[120px] rounded-3xl'}`} onClick={() => {setCategory('service'); setShow(!show)}}>Service/Brand</button>
                <button className={`portfolio-filter-button-responsive bg-[#017c64] border-[#017c64] hover:text-[#017c64] delay-[25ms] ${show ?  'translate-y-0' : '-translate-y-[180px] rounded-3xl'}`} onClick={() => {setCategory('real estate'); setShow(!show)}}>Real Estate</button>
                <button className={`portfolio-filter-button-responsive bg-[#1b5c78] border-[#1b5c78] hover:text-[#1b5c78] delay-[25ms] ${show ?  'translate-y-0' : '-translate-y-[240px] rounded-3xl'}`} onClick={() => {setCategory('industrial'); setShow(!show)}}>Industrial</button>
                <button className={`portfolio-filter-button-responsive bg-white border-white text-black hover:bg-[#aaa] hover:text-white rounded-b-3xl ${show ?  'translate-y-0' : '-translate-y-[300px] rounded-3xl'}`} onClick={() => {setCategory(''); setShow(!show)}}>Clear</button>
            </div>
        </div>

        <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-x-6 h-full mt-20">
            <Filtered category={category} />
        </div>
      
    </main>
  )
}

