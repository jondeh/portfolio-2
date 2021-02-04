import React, {useState, useContext} from 'react';
import '../SCSS/Header.scss';
import {ImMenu} from 'react-icons/im';
import {useHistory} from 'react-router-dom';
import {AppContext} from '../context/AppContext';

const Header = () => {
    const { isLight, setIsLight } = useContext(AppContext);
    const {push} = useHistory()
    const [isMenuToggle, setIsMenuToggle] = useState(false);

    const buttonStyle = {
        color: isLight ? "black" : "white"
    }

    const handleInitials = () => {
        push('/')
    }

    const handleSetLightMode = () => {
        setIsLight(!isLight)
        console.log("isLight", `${isLight ? "lightMode" : "darkMode" }-image`)
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
        <div className="header-container" style={{background: isLight ? "rgba(255, 255, 255, 0.88)" : "black"}}>
        <div className={`header-initials-${isLight}`} onClick={handleInitials}></div>
        <div className="mode-container-mobile"
            onClick={handleSetLightMode}>
            <div 
                className={`${isLight ? "lightMode" : "darkMode" }-image`}>
            </div>
        </div>
            <ImMenu className="menu-icon" onClick={handleMenuToggle} />
            <div className="web-menu">
                <button style={buttonStyle} onClick={handleButtonAbout}>ABOUT</button>
                <button style={buttonStyle} onClick={handleButtonSkills}>SKILLS</button>
                <button style={buttonStyle} onClick={handleButtonPortfolio}>PROJECTS</button>
                {/* <button onClick={handleButtonResume}>RESUME</button> */}
                <button style={buttonStyle} onClick={handleButtonContact}>CONTACT</button>
            </div>
            {
                isMenuToggle && <div className="mobile-menu">
                <button style={buttonStyle} onClick={handleButtonAbout}>ABOUT</button>
                <button style={buttonStyle} onClick={handleButtonSkills}>SKILLS</button>
                <button style={buttonStyle} onClick={handleButtonPortfolio}>PROJECTS</button>
                {/* <button onClick={handleButtonResume}>RESUME</button> */}
                <button style={buttonStyle} onClick={handleButtonContact}>CONTACT</button>
            </div>
            }
            <div 
                className="mode-container-web"
                onClick={handleSetLightMode}>
                <div 
                    className={`${isLight ? "lightMode" : "darkMode" }-image`}>
                </div>
            </div>
        </div>
    )
}

export default Header;