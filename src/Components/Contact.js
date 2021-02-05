import React, {useContext} from 'react';
import '../SCSS/Contact.scss';

import {AppContext} from '../context/AppContext';

import {AiFillGithub} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';


const Contact = () => {
    const {isLight} = useContext(AppContext);

    const textColor = {color: isLight ? "black" : "white"}

    return (
        <div className="contact-container" style={{background: isLight ? "white" : "black"}}>
            <div className="github-container">
            <a href="http://www.github.com/jondeh">
                <div className="github-info">
                    <span style={textColor}>Github</span>
                    <div className="gh-icon">
                    <AiFillGithub size={28} color={isLight ? "black" : "white"}/>
                    </div>
                    <span style={textColor}>jondeh</span>  
                </div>
            </a>
            </div>
            <div className="email-container">
                <a  href="mailto: jondehlin@gmail.com">
                    <div className="email-info">
                        <span style={textColor}>Email</span>
                        <div className="email-icon">
                            <MdEmail size={28} color={isLight ? "black" : "white"}/>
                        </div>
                        <span style={textColor}>jondehlin@gmail.com</span>
                    </div>
                    
                </a>
                
            </div>
            
        </div>
    )
}

export default Contact;