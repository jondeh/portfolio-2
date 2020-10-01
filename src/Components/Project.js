import React, {useState, useEffect} from 'react';
import '../SCSS/Project.scss';
import {SiJavascript as javaScriptIcon} from 'react-icons/si';
import {AiFillHtml5 as HTMLIcon} from 'react-icons/ai';
import {FaReact} from 'react-icons/fa';
import {DiCss3} from 'react-icons/di';
import {SiPostgresql} from 'react-icons/si';
import {GrNode} from 'react-icons/gr';
import {AiFillGithub} from 'react-icons/ai';
import {ImGit} from 'react-icons/im';
import {FaPython} from 'react-icons/fa';
import {SiGreensock} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';
import {MdKeyboardArrowLeft as Left} from 'react-icons/md';
import {MdKeyboardArrowRight as Right} from 'react-icons/md';

const Project = ({ project }) => {
    const {title, description, technologies, images, url, github, techs} = project;

    const [picNum, setPicNum] = useState(0)

    const handlePicClick = (math) => {
        if (!images[picNum + math]){return}
        setPicNum(picNum + math)
    }

    return (
        <div className="project-container">
            <div className="project-title">
                <h2>{title}</h2>
                <a href={github}>
                    <AiFillGithub className="project-icon" color="black" />
                </a>
            </div>
            <div className="project-img" style={{backgroundImage: `url(${images[picNum]})`}} alt={title + " Image"}>
                <div  onClick={() => handlePicClick(-1)}className="overlay"><Left /></div>
                <div  onClick={() => handlePicClick(+1)}className="overlay"><Right /></div>
            </div>
            <div className="project-tech-icons">
                {technologies}
            </div>

            <div className="project-description">
                <p>
                    {description}
                </p>
            </div>
            <div className="project-techs">
                <h4>Technologies</h4>
                <div className="p-techs">
                {techs.map((tech, techID) => {
                    return <ul key={techID}>{tech}</ul>
                })}
                </div>
            </div>
        </div>
    )
}

export default Project;