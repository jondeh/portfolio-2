import React, { useEffect, useState } from 'react';
import '../SCSS/Title.scss';
import useHslCycle from '../hooks/useHslCycle';
import { motion } from "framer-motion";

const random = () => {
    return Math.floor(Math.random() * 169)
}


const Title = () => {
    const [color1, setColor1] = useState(random())

    // useEffect(() => {
    //     setInterval(() => {
    //         setColor1(random())
    //     }, 500)
    // }, [])

    return (
        <div className="title-container">
            {/* <h1>Jonathon Dehlin</h1>
            <h2>Software Developer</h2> */}
            <svg viewBox="0 0 100 100" >
                <defs>
                    <radialGradient id="grad1" x1="0%" y1='0%' x2="100%" y2="0%">
                        <stop 
                            offset="0%" 
                            stopColor={`rgb(${random()},${random()},${random()})`}
                            stopOpacity={'1'}
                            gradientTransform="rotate(90)" />
                        <stop 
                            offset="100%" 
                            stopColor={`rgb(${random()},${random()},${random()})`}
                            stopOpacity={'1'} />
                    </radialGradient>
                </defs>
                <g 
                    fill="url(#grad1)"
                    // stroke={`rgb(${random()}, ${random()}, ${random()})`}
                    stroke="white"
                    stroke-width="5">
                        <circle cx="40" cy="40" r="25" />
                        <circle cx="60" cy="60" r="25" />
                </g>
            </svg>
        </div>
    )
}

export default Title;