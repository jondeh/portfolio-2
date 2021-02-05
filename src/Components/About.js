import React, {useContext} from 'react';
import '../SCSS/About.scss';
import {AppContext} from '../context/AppContext';

// import ColorCircle from './ColorCircle';

// const random = () => {
//     return Math.floor(Math.random() * 169)
// }

const Bio = () => {
    const {isLight} = useContext(AppContext);

// const colorStyle = {
//     background: `linear-gradient(${`rgb(${random()},${random()},${random()})`}, ${`rgb(${random()},${random()},${random()})`})`
// }

    return (
        <div className="bio-container" style={{background: isLight ? "white" : "black"}}>
            <div className="bio-summary" style={{color: isLight ? "black" : "white"}}>
                <p>
                    <span>Hello World! <b>My name is Jon Dehlin.</b>  </span>
                    <br/>
                    <br/>
                    <span>
                        I am a <b>full-stack</b> web developer who specializes in creating <b>responsive</b> websites, from the database to the front-end animations.
                    </span>
                    <br/>
                    <br/>
                    <span>
                        I write <b>clean code</b> that is scalable and easy to maintain, and work best when surrounded by motivated people who just want to build things and <b>solve problems.</b>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        Feel free to go over to the projects tab and look at some of my work.  Each one has a link to the github repo.
                    </span>
                    <br/>
                    <br/>
                </p>
            </div>
            
        </div>
    )
}

export default Bio;