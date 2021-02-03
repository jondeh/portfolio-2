import React, {useState} from 'react';
import '../SCSS/Header.scss';
import {ImMenu} from 'react-icons/im';
import {useHistory} from 'react-router-dom';

const Header = () => {
    const {push} = useHistory()
    const [isMenuToggle, setIsMenuToggle] = useState(false);

    const handleInitials = () => {
        push('/')
    }

    const handleMenuToggle = () => {
        setIsMenuToggle(!isMenuToggle)
    }

    const handleButtonAbout = () => {
        push('/about')
        setIsMenuToggle(false)
    }

    const handleButtonSkills = () => {
        push('/skills')
        setIsMenuToggle(false)
    }
    
    const handleButtonPortfolio = () => {
        push('/portfolio')
        setIsMenuToggle(false)
    }
    
    const handleButtonResume = () => {
        push('/resume')
        setIsMenuToggle(false)
    }
    
    const handleButtonContact = () => {
        push('/contact')
        setIsMenuToggle(false)
    }
    console.log(isMenuToggle)

    return (
        <div className="header-container">
        <div className="header-initials" onClick={handleInitials}></div>
            <ImMenu className="menu-icon" onClick={handleMenuToggle} />
            <div className="web-menu">
                <button onClick={handleButtonAbout}>ABOUT</button>
                <button onClick={handleButtonSkills}>SKILLS</button>
                <button onClick={handleButtonPortfolio}>PROJECTS</button>
                {/* <button onClick={handleButtonResume}>RESUME</button> */}
                <button onClick={handleButtonContact}>CONTACT</button>
            </div>
            {
                isMenuToggle && <div className="mobile-menu">
                <button onClick={handleButtonAbout}>ABOUT</button>
                <button onClick={handleButtonSkills}>SKILLS</button>
                <button onClick={handleButtonPortfolio}>PROJECTS</button>
                {/* <button onClick={handleButtonResume}>RESUME</button> */}
                <button onClick={handleButtonContact}>CONTACT</button>
            </div>
            }
            
        </div>
    )
}

export default Header;