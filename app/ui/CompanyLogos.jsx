import Image from "next/image";

const CompanyLogos = () => {
  return (
    <div className='bg-custom-gray py-10'>
        <h2 className='font-bold text-2xl mb-10'>Trusted by the Gallatin Valley</h2>
        <div className="grid max-md:gap-x-4 grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 place-items-center lg:w-[64rem] lg:mx-auto">
            <Image src={'/logos/Daves_Sushi.svg'} width={194} height={1} alt="Daves Sushi" />
            <Image src={'/logos/WilliesDistillery.webp'} width={194} height={1} alt="Willie's Distillery" />
            <Image src={'/logos/MontanaFenceLogo.webp'} width={194} height={1} alt="Montana Fence" />
            <Image src={'/logos/MontanaFlavor.webp'} width={194} height={1} alt="Montana Flavor" />
            <Image src={'/logos/EvolveLogo.png'} width={194} height={1} alt="Evolve Hair Design" />
            <Image src={'/logos/CraftedAesthetics.png'} width={194} height={1} alt="Crafted Aesthetics and Wellness" />
        </div>
    </div>
  )
}

export default CompanyLogos