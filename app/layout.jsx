import "./globals.css";
import { Jost } from 'next/font/google';

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Nav from "./ui/general/Nav";
import Foot from "./ui/general/foot"
import Banner from "./ui/general/Banner"

const jost = Jost({subsets: ['latin']})


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="google-site-verification" content={process.env.GOOGLE_VVM}/>
        <meta name="keywords" content="videography, videos, advertisement, bozeman, montana, mt, veca vision media" />
        <meta name="description" content="Videography Business based in Bozeman, MT" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        
      </head>

      <body className={` ${jost.className} text-white bg-[#090909]`}>
        
        <div className="flex flex-col min-h-screen justify-between">
          <header className="sticky top-0 z-10">
            <Banner />  
            <Nav />
          </header>
          
          <div className="mb-auto overflow-hidden">
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
          
          
          <footer className="relative border-t border-white/50 pt-3 pb-2 bg-black">

            <Foot />

            <div className="mt-3 font-thin text-xs flex justify-evenly">Copyright &copy; 2024 Veca Vision Media - All Rights Reserved.</div>


          </footer>


        </div>
      </body>
    </html>
  );
}
