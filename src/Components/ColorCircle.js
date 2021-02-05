import React, { useEffect, useState } from 'react';
import '../SCSS/ColorCircle.scss';
import face from '../img/proPic/Profile_Pic.JPG';

const random = () => {
    return Math.floor(Math.random() * 169)
}


const ColorCircle = () => {
    const [color1, setColor1] = useState(random())
    const [circleSize, setCircleSize] = useState(null)

    useEffect(() => {
        let imageCircle = document.getElementById("img-circle").offsetTop;
        setCircleSize(imageCircle)
    }, [])
    
    console.log("circleSize", circleSize);


    // useEffect(() => {
    //     setInterval(() => {
    //         setColor1(random())
    //     }, 500)
    // }, [])

    return (
        <div className="circle-container">
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
                        <circle cx="50" cy="50" r="50" />
                        {/* <circle cx="60" cy="60" r="25" /> */}
                </g>
            </svg>
        </div>
    )
}

export default ColorCircle;