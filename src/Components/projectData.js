import React from 'react';
import gameRyanPic from '../img/gameryan-screenshot.png';
import settlersPic from '../img/settlers-screenshot.png';
import vinPic from '../img/vindermere-screenshot.png';
import { SiJavascript } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiPostgresql } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { ImGit } from 'react-icons/im';
import { FaPython } from 'react-icons/fa';
import { SiGreensock } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';

let JAVASCRIPT = <SiJavascript className="project-icon" />
let HTML = <AiFillHtml5 className="project-icon" />
let REACT = <FaReact className="project-icon" />
let CSS = <DiCss3 className="project-icon" />
let SQL = <SiPostgresql className="project-icon" />
let NODE = <GrNode className="project-icon" />
let GITHUB = <AiFillGithub className="project-icon" />
let GIT = <ImGit className="project-icon" />
let PYTHON = <FaPython className="project-icon" />
let GREENSOCK = <SiGreensock className="project-icon" />
let MONGO = <SiMongodb className="project-icon" />
let PHOTOSHOP = <SiMongodb className="project-icon" />

export const projects = [
    {
        title: "Settlers of Catan",
        url: null,
        github: "https://github.com/Aposhian-Dehlin-Buford/settlers",
        images: [gameRyanPic, settlersPic, vinPic],
        technologies: [REACT, NODE, SQL],
        techs: ["ReactJS", "Node.js", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt", "Socket.io", "GreenSock", "Photoshop"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Vindermere",
        url: "http://vindermere.com/",
        github: "https://github.com/Arcade-Game/dungeon-crawler",
        images: [],
        technologies: [REACT, NODE, MONGO, SQL],
        techs: ["ReactJS", "Node.js", "MongoDB", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt", "GreenSock", "Photoshop"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Sudoku",
        url: "vindermere.com",
        github: "https://github.com/jondeh/gameRyan.com",
        images: [],
        technologies: [REACT, NODE, SQL],
        techs: ["ReactJS", "Node.js", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Chord Finder",
        url: null,
        github: "https://github.com/jondeh/no-db",
        images: [],
        technologies: [REACT, NODE, SQL],
        techs: ["ReactJS", "Node.js", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Pathfinding Visualizer",
        url: null,
        github: "github.com",
        images: [],
        technologies: [REACT, NODE, MONGO],
        techs: ["ReactJS", "Node.js", "MongoDb", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Paint",
        url: null,
        github: "github.com",
        images: [],
        technologies: [REACT, NODE, MONGO],
        techs: ["ReactJS", "Node.js", "MongoDb", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Map Editor",
        url: null,
        github: "https://github.com/jondeh/map-editor",
        images: [],
        technologies: [REACT, NODE, MONGO],
        techs: ["ReactJS", "Node.js", "MongoDb", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]