import React, { useEffect, useState } from 'react';
import '../SCSS/Title.scss';

const random = () => {
    return Math.floor(Math.random() * 169)
}


const Title = () => {

    return (
        <div className="title-container">
            <h1>Jonathon Dehlin</h1>
            <h2>Software Developer</h2>
        </div>
    )
}

export default Title;