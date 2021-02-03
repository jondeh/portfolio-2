import React from 'react';
import '../SCSS/Contact.scss';

import {AiFillGithub} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';


const Contact = () => {
    return (
        <div className="contact-container">
            <div className="github-container">
            <a href="http://www.github.com/jondeh">
                <div className="github-info">
                    <span>Github</span>
                    <div className="gh-icon">
                    <AiFillGithub size={28} />
                    </div>
                    <span>jondeh</span>  
                </div>
            </a>
            </div>
            <div className="email-container">
                <a  href="mailto: jondehlin@gmail.com">
                    <div className="email-info">
                        <span>Email</span>
                        <div className="email-icon">
                            <MdEmail size={28} />
                        </div>
                        <span>jondehlin@gmail.com</span>
                    </div>
                    
                </a>
                
            </div>
            
        </div>
    )
}

export default Contact;