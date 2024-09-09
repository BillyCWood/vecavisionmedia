export default function Card({icon, text, bgcolor, textcolor, customstyles}) {
    
    return(
        <div className={`${customstyles} ${textcolor} ${bgcolor} w-52 h-40 rounded-lg flex flex-col justify-center px-2`}>
            <div className="block ml-auto mr-auto">{icon}</div>
            <p>{text}</p>
        </div>
    );
}