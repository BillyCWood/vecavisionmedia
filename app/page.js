import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="flex flex-col">
      <div className="w-full h-screen snap-mandatory snap-y">
        <div className="snap-center">
          <Image src="/images/robert-shunev-unsplash.png" width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
        </div>
        <div className="snap-center">
          <Image src="/images/theregisti-HSXIp58yPyI-unsplash.jpg" width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
        </div>
        <div className="bg-vvm-blue snap-center">3</div>
      </div>
    </main>
    
 
  );
}
