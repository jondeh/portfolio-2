import React, { useEffect, useState, useContext } from 'react';
import '../SCSS/Title.scss';
import {AppContext} from '../context/AppContext';

import DeskMan from './DeskMan';

// const random = () => {
//     return Math.floor(Math.random() * 169)
// }


const Title = () => {
    const {isLight} = useContext(AppContext);

    return (
        <div className="title-container" style={{background: isLight ? "linear-gradient(to top right, white, white, white)" : "#0F0F0F"}}>
            <h1 className={`title-name-${isLight}`}>Jonathon Dehlin</h1>
            <DeskMan />
            <h2 className={`title-title-${isLight}`}>Web Developer</h2>
        </div>
    )
}

export default Title;