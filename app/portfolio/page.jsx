'use client';
import { useState } from "react";
import Filtered from '../ui/portfolio/Filtered';
import { categories } from "../../utils/constants";


export default function Portfolio() {

  const [category, setCategory] = useState('');
  const [show, setShow] = useState(false);

  return (
    <main className="bg-black min-h-screen">
        <div className="hidden lg:flex mt-6 ml-10">
            <button className="bg-white border-[2px] border-white text-black hover:bg-[#aaa] hover:text-white transition-colors duration-300 ease-linear p-2 w-40 rounded-3xl z-[1]" onClick={()=> {setShow(!show); console.log(show)}}>Search by topic</button>
            {
                // The "javascript-esque" way of making the buttons I implemented earlier does not work
                // because Tailwind does not support dynamic classes... SO BACK TO THE ORIGINAL WAY; IF IT AINT BROKE DON'T FIX IT!
            }
            <div className={`z-0 flex gap-x-4 ml-6`}>
                <button className={`bg-[#4d0066] p-2 w-32 rounded-3xl border-[2px] border-[#4d0066] hover:bg-white hover:text-[#4d0066] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[152px]'}`} onClick={() => {setCategory('product'); setShow(!show)}}>Product</button>
                <button className={`bg-[#01417c] p-2 w-32 rounded-3xl border-[2px] border-[#01417c] hover:bg-white hover:text-[#01417c] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[300px]'}`} onClick={() => {setCategory('service'); setShow(!show)}}>Service/Brand</button>
                <button className={`bg-[#017c64] p-2 w-32 rounded-3xl border-[2px] border-[#017c64] hover:bg-white hover:text-[#017c64] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[450px]'}`} onClick={() => {setCategory('real estate'); setShow(!show)}}>Real Estate</button>
                <button className={`bg-[#1b5c78] p-2 w-32 rounded-3xl border-[2px] border-[#1b5c78] hover:bg-white hover:text-[#1b5c78] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[600px]'}`} onClick={() => {setCategory('industrial'); setShow(!show)}}>Industrial</button>
                <button className={`bg-white border-[2px] border-white text-black hover:bg-[#aaa] hover:text-white transition-all duration-300 ease-linear p-2 w-32 rounded-3xl ${show ?  'translate-x-0' : '-translate-x-[750px]'}`} onClick={() => {setCategory(''); setShow(!show)}}>Clear</button>
            </div>
        </div>

        <div className="flex flex-col mt-10 py-2 w-96 mx-auto lg:hidden items-center">
            <button className={`group py-4 bg-white border-[2px] border-white text-black hover:bg-[#aaa] hover:text-white w-56 ${show ? 'rounded-t-3xl' : 'rounded-3xl'} transition-all duration-300 ease-linear flex items-center justify-center z-[1]`} onClick={()=> {setShow(!show)}}>Search by topic <span className="block border-b-2 group-hover:border-b-white transition-colors duration-500 border-b-black w-2 rotate-45 translate-y-[1px] translate-x-[3px]" /><span className="block border-b-2 group-hover:border-b-white transition-colors duration-500 border-b-black w-2 -rotate-45 translate-y-[1px]" /></button>
            <div className={`w-56 mx-auto z-0 ${show ? '' : 'h-0'}`}>

                <button className={`py-4 bg-[#4d0066] w-56 border-[2px] border-[#4d0066] hover:bg-white hover:text-[#4d0066] transition-all duration-300 ease-linear ${show ?  'translate-y-0' : 'opacity-0 -translate-y-[60px] rounded-3xl'}`} onClick={() => {setCategory('product'); setShow(!show)}}>Product</button>
                <button className={`py-4 bg-[#01417c] w-56 border-[2px] border-[#01417c] hover:bg-white hover:text-[#01417c] transition-all duration-300 ease-linear ${show ?  'translate-y-0' : '-translate-y-[120px] rounded-3xl'}`} onClick={() => {setCategory('service'); setShow(!show)}}>Service/Brand</button>
                <button className={`py-4 bg-[#017c64] w-56 border-[2px] border-[#017c64] hover:bg-white hover:text-[#017c64] transition-all duration-300 ease-linear delay-[25ms] ${show ?  'translate-y-0' : '-translate-y-[180px] rounded-3xl'}`} onClick={() => {setCategory('real estate'); setShow(!show)}}>Real Estate</button>
                <button className={`py-4 bg-[#1b5c78] w-56 border-[2px] border-[#1b5c78] hover:bg-white hover:text-[#1b5c78] transition-all duration-300 ease-linear delay-[25ms] ${show ?  'translate-y-0' : '-translate-y-[240px] rounded-3xl'}`} onClick={() => {setCategory('industrial'); setShow(!show)}}>Industrial</button>
                <button className={`py-4 bg-white border-[2px] border-white text-black hover:bg-[#aaa] hover:text-white transition-all duration-300 ease-linear w-56 rounded-b-3xl ${show ?  'translate-y-0' : '-translate-y-[300px] rounded-3xl'}`} onClick={() => {setCategory(''); setShow(!show)}}>Clear</button>
            </div>
        </div>

        <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-x-6 h-full mt-20">
            <Filtered category={category} />
        </div>
      
    </main>
  )
}

