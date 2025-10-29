import type { focusDivs } from "../App"

type props = {
    onChangeFocus:(f:focusDivs)=>void;
}


export default function Header({onChangeFocus}:props) {
    return(
        <div className="h-15 w-full border-b-2">
            <div className="w-full h-full grid grid-cols-4 text-2xl">
                <div className="header">
                    <a href="#about" onClick={()=>onChangeFocus("about")}>
                        Who am I?
                    </a>
                </div>
                <div className="header" onClick={()=>onChangeFocus("skills")}>
                    <a href="#skills">
                        What are my skills?
                    </a>
                </div>
                <div className="header" onClick={()=>onChangeFocus("projects")}>
                    <a href="#projects">
                    What have I done?
                    </a>
                </div>
                <div className="header" onClick={()=>onChangeFocus("contact")}>
                    <a href="#contact">
                    How to contact me?
                    </a>
                </div>
            </div>
        </div>
    )
}