import "./intro.scss"
import {ExpandMore} from "@material-ui/icons"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef= useRef();
    useEffect(() => {
        init(textRef.current,{
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings:["Front-end","Back-end","Full-stack"]
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Ameya.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    
                    <h1>Ameya Potey</h1>
                    <h3><span ref= {textRef}></span> Developer</h3>
                    
                </div>
                <a href="#education">
                    <ExpandMore className="arrow"/>
                </a>
            </div>
        </div>
    )
}
