import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import Link from "next/link";
import Button from "./ui/button";

export default function Home() {
  return (
    
    <main className="flex flex-col">
      <div className="w-full scroll-smooth snap-y snap-mandatory">
        
        <div className="snap-start bg-cover h-screen bg-center bg-no-repeat justify-center pt-16" style={{backgroundImage: "url('/images/robert-shunev-unsplash.png')"}}>
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="font-bold text-2xl">Bringing your vision to life, one frame at a time.</h1>
            <p className="mb-6">74% of consumers share video content from businesses on social media. We can help you create impressive video content to grow your business and reach more people.</p>
            <Link href="/contact"><Button text="Learn How" /></Link>
          </div>
        </div>

        <div className="snap-start min-h-screen bg-center bg-no-repeat bg-cover" style={{backgroundImage: "url('/images/theregisti-HSXIp58yPyI-unsplash.jpg')"}}>
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="font-bold text-2xl">Inspire, Engage, and Impress</h1>
            <p className="mb-6">We provide inspiring videography and photography services that engage audiences and build an impressive reputation for your brand.</p>
            <Link href="/services"><Button text="View Services" /></Link>
          </div>
        </div>

        <div className="snap-start bg-cover min-h-screen bg-center bg-no-repeat" style={{backgroundImage: "url('/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg')"}}>
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="font-bold text-2xl">See our work.</h1>
            <p className="mb-6">Lorem ipsum.</p>
            <Link href="/portfolio"><Button text="View Portfolio" /></Link>
          </div>
        </div>

      </div>
    </main>
    
 
  );
}
