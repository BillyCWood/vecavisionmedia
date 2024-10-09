export default function Card({icon, text, bgcolor, textcolor, customstyles}) {
    
    return(
        <div className={`${customstyles} ${textcolor} ${bgcolor} min-[350px]:w-40 min-[350px]:h-52 md:w-52 md:h-40 rounded-lg flex flex-col justify-center px-2`}>
            <div className="block ml-auto mr-auto" aria-hidden={true}>{icon}</div>
            <p>{text}</p>
        </div>
    );
}