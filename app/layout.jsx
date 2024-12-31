import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';

import Nav from "./ui/nav";
import Foot from "./ui/foot"


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: {
    template: '%s | Veca Vision Media',
    default: 'Veca Vision Media',
  },
  description: "Videography Business based in Bozeman, MT",
  keywords:['Videography', 'Videos', 'Advertisement', 'Bozeman', 'Montana', 'MT', 'Veca', 'Vision', 'Media'],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="google-site-verification" content={process.env.GOOGLE}/>
        <meta name="keywords" content="videography, videos, advertisement, bozeman, montana, mt, veca vision media" />
        <meta name="description" content="Videography Business based in Bozeman, MT" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <script type="application/ld+json">
        {{
          "@context" : "https://schema.org",
          "@type" : "WebSite",
          "name" : "Veca Vision Media",
          "alternateName" : "VVM",
          "url" : "https://vecavisionmedia.com/"
        }}
        </script>
      </head>

      <body className={`${inter.className} text-[#fff] bg-[#000]`}>
        
        <div className="flex flex-col min-h-screen justify-between">
          <header className="sticky top-0 z-10">
            <Nav />  
          </header>
          
          <div className="mb-auto overflow-hidden">
            {children}
          </div>
          
          
          <footer className="relative border-t border-white pt-3 pb-2 bg-[#000]">

            <Foot />

            <div className="mt-3 font-thin text-xs flex justify-evenly">Copyright &copy; 2024 Veca Vision Media - All Rights Reserved.</div>


          </footer>


        </div>
      </body>
    </html>
  );
}
