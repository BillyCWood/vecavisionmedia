import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="flex flex-col">
      <div className="w-full h-screen bg-vvm-pink snap-mandatory snap-y">
        <div className="bg-vvm-lightblue snap-center">1</div>
        <div className="bg-vvm-teal snap-center">2</div>
        <div className="bg-vvm-blue snap-center">3</div>
      </div>
    </main>
    
 
  );
}
