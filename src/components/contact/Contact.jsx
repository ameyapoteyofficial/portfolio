
import "./contact.scss"
import { useState } from "react";
import emailjs from "emailjs-com";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function Contact() {

    const [message, setMessage] =  useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_szr2dw9', 'template_2u2j5g4', e.target, 'user_evxFblwfBAmsJme57Q12X')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setMessage(true);
        e.target.reset();
    }
    return (
        <div className= "contact" id="contact">
            <div className="left">
                <img src ="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Get in Touch.</h2>
                <form onSubmit={handleSubmit}>
                <input type = "text" placeholder="Your Name" name="name"></input>
                    <input type = "text" placeholder="Your Email" name ="email"></input>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type = "submit">Send Email</button>

                    {message && <span> Thank you for your Email, I will get back to you at the earliest :)</span>}
                    <div>

                    </div>
                    
                    
                </form>
                <div className="iconsContainer">
                        <a  className="icons" href="https://github.com/ameyapoteyofficial" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                        <a  className="icons" href="https://linkedin.com/in/potey" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                        <a  className="icons" href="https://www.instagram.com/ameya777/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
                 </div>
                 <div className="footer">
                     Made with <FavoriteBorderIcon className="fav"/> by Ameya Potey 
                 </div>
            </div>
        </div>
    )
}
