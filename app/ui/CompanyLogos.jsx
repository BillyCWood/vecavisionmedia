import Image from "next/image";

const CompanyLogos = () => {
  return (
    <div className='bg-custom-gray py-10 relative border-t-2 border-white'>
        <h2 className='font-bold text-2xl mb-5'>Trusted by the Gallatin Valley</h2>
        <div className="slide-container w-full inline-flex flex-nowrap">
            {/*
            <Image src={'/logos/Daves_Sushi.svg'} width={194} height={1} alt="Daves Sushi" />
            <Image src={'/logos/WilliesDistillery.webp'} width={194} height={1} alt="Willie's Distillery" />
            <Image src={'/logos/MontanaFenceLogo.webp'} width={194} height={1} alt="Montana Fence" />
            <Image src={'/logos/MontanaFlavor.webp'} width={194} height={1} alt="Montana Flavor" />
            <Image src={'/logos/EvolveLogo.png'} width={194} height={1} alt="Evolve Hair Design" />
            <Image src={'/logos/CraftedAesthetics.png'} width={194} height={1} alt="Crafted Aesthetics and Wellness" />
            */}
            <ul id="slide-1" className="image-container flex items-center justify-center md:justify-start animate-infinite-scroll">
                <li><Image src={'/logos/Daves_Sushi.svg'} width={1} height={1} alt="Daves Sushi" className="carousel-logo-svg" /></li>
                <li><Image src={'/logos/WilliesDistillery.svg'} width={1} height={1} alt="Willie's Distillery" className="carousel-logo-svg" /></li>
                <li><Image src={'/logos/MontanaFenceLogo.webp'} width={370} height={1} alt="Montana Fence" className="carousel-logo" /></li>
                <li><Image src={'/logos/MontanaFlavor.webp'} width={256} height={1} alt="Montana Flavor" className="carousel-logo" /></li>
                <li><Image src={'/logos/EvolveLogo.png'} width={300} height={1} alt="Evolve Hair Design" className="carousel-logo" /></li>
                <li className=""><Image src={'/logos/CraftedAesthetics.png'} width={545} height={1} alt="Crafted Aesthetics and Wellness" className="carousel-logo" /></li>
            </ul>
            <ul id="slide-2" className="image-container flex items-center justify-center md:justify-start animate-infinite-scroll">
                <li><Image src={'/logos/Daves_Sushi.svg'} width={1} height={1} alt="Daves Sushi" className="carousel-logo-svg" /></li>
                <li><Image src={'/logos/WilliesDistillery.svg'} width={1} height={1} alt="Willie's Distillery" className="carousel-logo-svg" /></li>
                <li><Image src={'/logos/MontanaFenceLogo.webp'} width={370} height={1} alt="Montana Fence" className="carousel-logo" /></li>
                <li><Image src={'/logos/MontanaFlavor.webp'} width={256} height={1} alt="Montana Flavor" className="carousel-logo" /></li>
                <li><Image src={'/logos/EvolveLogo.png'} width={300} height={1} alt="Evolve Hair Design" className="carousel-logo" /></li>
                <li><Image src={'/logos/CraftedAesthetics.png'} width={545} height={1} alt="Crafted Aesthetics and Wellness" className="carousel-logo" /></li>
            </ul>
        </div>
    </div>
  )
}

export default CompanyLogos