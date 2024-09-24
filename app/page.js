import Link from "next/link";
import Button from "./ui/button";
import Carousel from "./ui/carousel";

export default function Home() {
  return (
    
    <main className="flex flex-col w-screen text-[#fff]">
      
        
      <div className="min-h-screen bg-[#000] bg-center bg-no-repeat bg-cover justify-center pt-16" style={{backgroundImage: "url('/images/robert-shunev-unsplash.png')"}}>
        <div className="flex flex-col items-center gap-y-2 px-6 text-center">
          <h1 className="font-bold text-2xl">Bringing your vision to life, one frame at a time</h1>
          <p className="mb-6">74% of consumers share video content from businesses on social media. We can help you create impressive video content to grow your business and give customers the desire to have your produect or service.</p>
          <Link href="/contact"><Button text="Learn How" /></Link>
        </div>
      </div>

      <div className="min-h-screen bg-center bg-no-repeat bg-cover pt-16" style={{backgroundImage: "url('/images/theregisti-HSXIp58yPyI-unsplash.jpg')"}}>
        <div className="flex flex-col items-center gap-y-2 px-6 text-center">
          <h1 className="font-bold text-2xl">Inspire, Engage, and Impress</h1>
          <p className="mb-6">Hook your audience, engage their senses, and leave an unforgettable impression with captivaing cideo productions that elevate your brand.</p>
          <Link href="/services"><Button text="View Services" /></Link>
        </div>
      </div>

      <div className=" min-h-screen bg-center bg-no-repeat bg-cover pt-16" style={{backgroundImage: "url('/images/hunter-moranville-CMEpx6q7xrs-unsplash.jpg')"}}>
        <div className="flex flex-col items-center gap-y-2 px-6 text-center">
          <h1 className="font-bold text-2xl">See it for Yourself</h1>
          <p className="mb-6">Examples of how we've brought our clients vision to life.</p>
          <Link href="/portfolio" className="py-6" ><Button text="View the Vision" /></Link>
        </div>
      </div>

      
    </main>
    
 
  );
}
