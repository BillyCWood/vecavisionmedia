'use client';
import { useState } from "react";
import Filtered from '../ui/Filtered';
import { categories } from "../../utils/constants";


export default function Portfolio() {

  const [category, setCategory] = useState('');
  const [show, setShow] = useState(false);

  return (
    <main className="bg-[#000] min-h-screen">
      <div className="hidden lg:flex mt-6 ml-10">
        <button className="bg-[#fff] border-[2px] border-[#fff] text-[#000] hover:bg-[#aaa] hover:text-[#fff] transition-colors duration-300 ease-linear p-2 w-40 rounded-3xl z-[1]" onClick={()=> {setShow(!show); console.log(show)}}>Search by topic</button>
        
        <div className={`z-0 relative`}>
            {
                categories.map((category, index)=>(
                    <button className={`portfolio-button_lg ${category.colors} ${show ? 'ml-4 translate-x-0' : '-translate-x-[152px] absolute left-0 '} ${index == 4 ? 'text-black': ''}`} key={index} onClick={()=> setCategory(category.category)}>{category.name}</button>
                ))
            }
        </div>
      </div>

      <div className="flex flex-col mt-10 py-2 w-96 mx-auto lg:hidden items-center">
        <button className={`group py-4 bg-[#fff] border-[2px] border-[#fff] text-[#000] hover:bg-[#aaa] hover:text-[#fff] w-56 ${show ? 'rounded-t-3xl' : 'rounded-3xl'} transition-all duration-300 ease-linear flex items-center justify-center z-[1]`} onClick={()=> {setShow(!show)}}>Search by topic <span className="block border-b-2 group-hover:border-b-[#fff] transition-colors duration-500 border-b-[#000] w-2 rotate-45 translate-y-[1px] translate-x-[3px]" /><span className="block border-b-2 group-hover:border-b-[#fff] transition-colors duration-500 border-b-[#000] w-2 -rotate-45 translate-y-[1px]" /></button>
        <div className={`flex flex-col z-0 ${show ? '' : 'h-0'}`}>

            {
                categories.map((category, index)=>(
                    <button className={`portfolio-button ${category.colors} ${show ? 'translate-y-0' : 'absolute -translate-y-[60px] left-48 rounded-3xl'} ${index == 4 ? 'rounded-b-3xl text-black' : ''}`} key={index} onClick={()=> setCategory(category.category)}>{category.name}</button>
                ))
            }
        </div>
      </div>

      <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-x-6 h-full mt-20">
        <Filtered category={category} />
      </div>
      
    </main>
  )
}

