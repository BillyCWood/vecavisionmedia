import Link from "next/link";

export default function Button(props){
    return(
        
            <div className="
            group
            bg-custom-gray 
            h-10 
            w-56
            rounded-full 
            ease-in-out 
            duration-300 
            content-center
            text-center
            hover:bg-vvm-pink 
            hover:cursor-pointer
            hover:pr-5"
            aria-hidden={false}
            aria-label="button"
            >

                <span className="inline-block relative after:content-['\00BB'] after:text-vvm-lightblue after:absolute after:-right-5 after:opacity-0 after:group-hover:opacity-100 after:ease-in-out after:duration-300">{props.text}</span>

            </div>
        
    );
}