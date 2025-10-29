import "../App.css";


export default function About(){
    return(
        <div className="w-full h-full gap-10 flex flex-col p-1">
            <p className="flex flex-col gap-2"> 
                <p className="text_transition">Muhammad </p>
                <p className="text_transition">Hasnain</p>
                <p className="text_transition">Ali</p>
            </p>
            <div>
                <p className="text-5xl hover:opacity-80 hover:scale-101 transition-scale duration-160">Backend Engineer</p>
            </div>
        </div>
    )
}