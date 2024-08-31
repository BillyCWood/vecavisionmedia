export default function Card(props) {
    
    return(
        <div className="text-[#000] bg-[#fff] w-32 h-24 rounded-lg flex flex-col justify-center">
            <div className="block ml-auto mr-auto">{props.icon}</div>
            <p>{props.text}</p>
        </div>
    );
}