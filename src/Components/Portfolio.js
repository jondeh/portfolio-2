import React from 'react';
import '../SCSS/Portfolio.scss';
import {projects} from './projectData';
import Project from './Project';

const Portfolio = () => {
    const mappedProjects = projects.map((e,i) => {
        return <Project key={i} project={e} />
    })
    return (
        <div className="portfolio-container">
            {mappedProjects}
        </div>
    )
}

export default Portfolio;