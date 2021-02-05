import React, {useState, useContext} from 'react';
import '../SCSS/Project.scss';
// import {SiJavascript as javaScriptIcon} from 'react-icons/si';
// import {AiFillHtml5 as HTMLIcon} from 'react-icons/ai';
// import {FaReact} from 'react-icons/fa';
// import {DiCss3} from 'react-icons/di';
// import {SiPostgresql} from 'react-icons/si';
// import {GrNode} from 'react-icons/gr';
// import {ImGit} from 'react-icons/im';
// import {FaPython} from 'react-icons/fa';
// import {SiGreensock} from 'react-icons/si';
// import {SiMongodb} from 'react-icons/si';
// import {SiAdobephotoshop} from 'react-icons/si';
import {AiFillGithub} from 'react-icons/ai';
import {MdKeyboardArrowLeft as Left} from 'react-icons/md';
import {MdKeyboardArrowRight as Right} from 'react-icons/md';
import {AppContext} from '../context/AppContext';

const Project = ({ project }) => {
    const {isLight} = useContext(AppContext);
    const {title, description, technologies, images, github, techs} = project;

    const [picNum, setPicNum] = useState(0)

    const handlePicClick = (math) => {
        if (!images[picNum + math]){return}
        setPicNum(picNum + math)
    }

    const iconColor = isLight ? "black" : "white"

    return (
        <div className="project-container" style={{background: isLight ? null : "rgb(37, 37, 37)"}}>
            <div className="project-title" style={{color: isLight ? null : "white"}}>
                <h2>{title}</h2>
                <a href={github}>
                    <AiFillGithub className="project-icon" color={iconColor} />
                </a>
            </div>
            <div className="project-img" style={{backgroundImage: `url(${images[picNum]})`}} alt={title + " Image"}>
                <div  onClick={() => handlePicClick(-1)}className="overlay"><Left /></div>
                <div  onClick={() => handlePicClick(+1)}className="overlay"><Right /></div>
            </div>
            <div className="project-tech-icons" style={{color: isLight ? null : "#cfcccc"}}>
                {technologies}
            </div>

            <div className="project-description" style={{color: isLight ? null : "white"}}>
                <p>
                    {description}
                </p>
            </div>
            <div className="project-techs">
                <h4 style={{background: isLight ? null : "transparent", color: isLight ? null : "white"}}>Technologies</h4>
                <div className="p-techs">
                {techs.map((tech, techID) => {
                    return <ul key={techID} style={{color: isLight ? null : "white"}}>{tech}</ul>
                })}
                </div>
            </div>
        </div>
    )
}

export default Project;