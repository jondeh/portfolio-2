import React, {useContext} from 'react';
import '../SCSS/Skills.scss';
import {SiJavascript} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
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
import {AppContext} from '../context/AppContext';



const Skills = () => {
    const {isLight} = useContext(AppContext);
    const iconColor = isLight ? null : "white"
    return (
        <div className="skills-container" style={{background: isLight ? "white" : "black"}}>
            <div className="skills-header"><h2>Skills</h2></div>
            <div className="skills-grid">

            <div><SiJavascript color={iconColor} className="react-icon"/><h3>JavaScript</h3></div>
            <div><FaReact color={iconColor} className="react-icon" /><h3>React</h3></div>
            <div><GrNode color={iconColor} className="react-icon"/><h3>Node.js</h3></div>
            <div><AiFillHtml5 color={iconColor} className="react-icon"/><h3>HTML</h3></div>
            <div><DiCss3 color={iconColor} className="react-icon"/><h3>CSS</h3></div>
            <div><SiPostgresql color={iconColor} className="react-icon"/><h3>PostgreSQL</h3></div>
            <div><SiMongodb color={iconColor} className="react-icon"/><h3>MongoDB</h3></div>
            <div><AiFillGithub color={iconColor} className="react-icon"/><h3>Github</h3></div>
            <div><ImGit color={iconColor} className="react-icon"/><h3>Git</h3></div>
            <div><FaPython color={iconColor} className="react-icon"/><h3>Python</h3></div>
            <div><SiGreensock color={iconColor} className="react-icon"/><h3>GreenSock</h3></div>
            <div><SiAdobephotoshop color={iconColor} className="react-icon"/><h3>Photoshop</h3></div>
            </div>
            
        </div>
    )
}

export default Skills;