import React, {useEffect, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import styled from 'styled-components';
import { ReactComponent as ImportedComponent} from '../img/SVG/ManDesk.svg';
import '../SCSS/DeskMan.scss';

const computers = ["lower-right-screen", "lower-mid-screen", "lower-left-screen", "upper-right-screen", "upper-mid-screen", "upper-left-screen"]; // IDs of the computer screens in the SVG

const stars = [...Array(16)].map((e,i) => `Star-${i+1}`) // IDs of the stars in the SVG Star-(1-16)

const shirt = ["shirt-main", "shirt-collar", "shirt-sleeve"]

const StyledSVG = styled(ImportedComponent)`
    display: block;
    margin: auto;
    width: 30em;
    height: 30em;`

const DeskMan = () => {
    const {isLight} = useContext(AppContext);

    useEffect(() => {
        console.log("stars", stars)

        let screenElements = computers.map((e,i) => {
            return document.getElementById(e)
        });

        let starElements = stars.map((e,i) => {
            return document.getElementById(e)
        })

        let shirtElements = shirt.map((e,i) => {
            return document.getElementById(e)
        })

        let backgroundElement = document.getElementById("background-sky")

        console.log("starElements", starElements)

        console.log("screenElements", screenElements)
        screenElements.forEach((e,i) =>{
            e.style.fill = isLight ? "white" : "black"
        });
        starElements.forEach((e,i) => {
            e.style.display = isLight ? "none" : "block"
        })
        shirtElements.forEach((e,i) => {
            e.style.fill = isLight ? "rgb(202, 206, 156)" : "rgb(49, 0, 71)"
        })
        backgroundElement.style.fill = isLight ? "url(#paint0_radial_2)" : "url(#paint0_radial)"
        // let head = document.getElementById('head')
        // head.style.fill = "rgb(20, 20, 20)"
    }, [isLight])

    return (
        <div className="desk-man-container">
            <StyledSVG />
        </div>
    )
}

export default DeskMan;