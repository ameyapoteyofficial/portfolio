import "./menu.scss"
import Pdf from "../../Documents/Resume.pdf"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul>
                <li onClick= {() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>    
                </li>
                <li onClick= {() => setMenuOpen(false)}>
                    <a href={Pdf} target="_blank" rel="noreferrer">Resume</a>    
                </li>
                <li onClick= {() => setMenuOpen(false)}> 
                    <a href="#education">Education</a>    
                </li>
                <li onClick= {() => setMenuOpen(false)}> 
                    <a href="#experience">Work Experience</a>    
                </li>
                <li onClick= {() => setMenuOpen(false)}> 
                    <a href="#works">Key Projects</a>    
                </li>
                <li onClick= {() => setMenuOpen(false)}>
                    <a href="#contact">Contact Me</a>    
                </li>
            </ul>
            
        </div>
    )
}
