import Image from "next/image";



export default function ServiceLayout({children}) {
    return(
        <>
{/*             <Image src={'/VVM-bg-images/annie-spratt-vertical.jpg'} alt="background image" style={{objectFit: 'cover'}} className='lg:hidden -z-10 opacity-10' fill />
            <Image src={'/VVM-bg-images/annie-spratt-horizontal.jpg'} alt="background image" style={{objectFit: 'cover'}} className='max-lg:hidden -z-10 opacity-10' fill /> */}
            {children}
        </>
    )
}