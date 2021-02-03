import React, {useState, useEffect} from 'react';
import '../SCSS/About.scss';

const Bio = () => {
    return (
        <div className="bio-container">
            <div className="bio-img-container"></div>
            <div className="bio-summary-container">
                <p>
                    <span>Hello World!</span>
                    <br/>
                    <br/>
                    <span>My name is Jon Dehlin.  I am a web developer who specializes in creating responsive websites full-stack, from the database to the animations on the front-end.
                    <br/>
                    <br/>
                    I write clean code that is scalable and easy to maintain, and work best when surrounded by motivated people who just want to build things and solve problems.
                    <br/>
                    <br/>
                    Feel free to go over to the projects tab and look at some of my work.  Each one has a link to the github repo.
                    <br/>
                    <br/>
                    </span>  
                </p>
            </div>
        </div>
    )
}

export default Bio;