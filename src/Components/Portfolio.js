import React, {useContext} from 'react';
import '../SCSS/Portfolio.scss';
import {projects} from './projectData';
import Project from './Project';
import {AppContext} from '../context/AppContext';

const Portfolio = () => {
    const {isLight} = useContext(AppContext);
    const mappedProjects = projects.map((e,i) => {
        return <Project key={i} project={e} />
    })
    return (
        <div className="portfolio-container" style={{background: isLight ? "white" : "black"}}>
            {mappedProjects}
        </div>
    )
}

export default Portfolio;