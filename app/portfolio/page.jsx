'use client';
import { useState } from "react";
import Filtered from '../ui/Filtered';


export default function Portfolio() {

  const [category, setCategory] = useState('');
  const [show, setShow] = useState(false);

  return (
    <main className="bg-[#000] min-h-screen">
      <div className="hidden lg:flex mt-6 ml-10">
        <button className="bg-[#fff] border-[2px] border-[#fff] text-[#000] hover:bg-[#aaa] hover:text-[#fff] transition-colors duration-300 ease-linear p-2 w-40 rounded-3xl z-[1]" onClick={()=> {setShow(!show)}}>Search by topic</button>
        <div className={`z-0 flex gap-x-4 ml-6`}>
          <button className={`bg-[#4d0066] p-2 w-32 rounded-3xl border-[2px] border-[#4d0066] hover:bg-[#fff] hover:text-[#4d0066] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[152px]'}`} onClick={() => setCategory('product')}>Product</button>
          <button className={`bg-[#01417c] p-2 w-32 rounded-3xl border-[2px] border-[#01417c] hover:bg-[#fff] hover:text-[#01417c] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[300px]'}`} onClick={() => setCategory('service')}>Service/Brand</button>
          <button className={`bg-[#017c64] p-2 w-32 rounded-3xl border-[2px] border-[#017c64] hover:bg-[#fff] hover:text-[#017c64] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[450px]'}`} onClick={() => setCategory('real estate')}>Real Estate</button>
          <button className={`bg-[#1b5c78] p-2 w-32 rounded-3xl border-[2px] border-[#1b5c78] hover:bg-[#fff] hover:text-[#1b5c78] transition-all duration-300 ease-linear  ${show ?  'translate-x-0' : '-translate-x-[600px]'}`} onClick={() => setCategory('industrial')}>Industrial</button>
          <button className={`bg-[#fff] border-[2px] border-[#fff] text-[#000] hover:bg-[#aaa] hover:text-[#fff] transition-all duration-300 ease-linear p-2 w-32 rounded-3xl ${show ?  'translate-x-0' : '-translate-x-[750px]'}`} onClick={() => setCategory('')}>Clear</button>
        </div>
      </div>

      <div className="flex flex-col mt-6 w-96 mx-auto lg:hidden">
        <button className="bg-[#fff] text-[#000] py-4 flex items-center justify-center z-[1]" onClick={()=> {setShow(!show)}}>Search by topic <span className="block border-b-2 border-b-[#000] w-2 rotate-45 translate-y-[1px] translate-x-[3px]" /><span className="block border-b-2 border-b-[#000] w-2 -rotate-45 translate-y-[1px]" /></button>
        <div className={`flex flex-col z-0 ${show ? 'divide-y-2' : 'h-0'}`}>
          <button className={`bg-[#4d0066] transition-transform duration-300 ease-linear py-4 ${show ?  'translate-y-0' : '-translate-y-14'}`} onClick={() => setCategory('product')}>Product</button>
          <button className={`bg-[#01417c] transition-transform duration-300 ease-linear py-4 ${show ?  'translate-y-0' : '-translate-y-[calc(56px*2)]'}`} onClick={() => setCategory('service')}>Service/Brand</button>
          <button className={`bg-[#017c64] transition-transform duration-300 ease-linear py-4 ${show ?  'translate-y-0' : '-translate-y-[calc(56px*3)]'}`} onClick={() => setCategory('real estate')}>Real Estate</button>
          <button className={`bg-[#1b5c78] transition-transform duration-300 ease-linear py-4 ${show ?  'translate-y-0' : '-translate-y-[calc(56px*4)]'}`} onClick={() => setCategory('industrial')}>Industrial</button>
          <button className={`bg-[#fff] text-[#000] transition-transform duration-300 ease-linear py-4 ${show ?  'translate-y-0' : '-translate-y-[calc(56px*5)]'}`} onClick={() => setCategory('')}>Clear</button>
        </div>
      </div>

      <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-x-6 h-full mt-20">
        <Filtered category={category} />
      </div>
      
    </main>
  )
}

