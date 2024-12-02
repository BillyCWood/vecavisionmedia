'use client';
import { useState } from "react";
import Filtered from '../ui/Filtered';


export default function Portfolio() {

  const [category, setCategory] = useState('');

  return (
    <main className="bg-[#000] min-h-screen">
      <button className="bg-vvm-pink p-2 w-32" onClick={() => setCategory('product')}>Product</button>
      <button className="bg-vvm-blue p-2 w-32" onClick={() => setCategory('food')}>Food</button>
      <button className="bg-vvm-teal p-2 w-32" onClick={() => setCategory('real estate')}>Real Estate</button>
      <button className="bg-vvm-lightblue p-2 w-32" onClick={() => setCategory('promotional')}>Promotional</button>
      <button className="p-2 w-16" onClick={() => setCategory('')}>Clear</button>

      <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-x-6 h-full mt-20">
        <Filtered category={category} />
      </div>
      
    </main>
  )
}

