import React from 'react';

import settlers1 from '../img/settlers/settlers-screenshot.png';
import settlers2 from '../img/settlers/settlers-screenshot2.png';
import settlers3 from '../img/settlers/settlers-draft.png';
import settlers4 from '../img/settlers/settlers-draft2.png';
import settlers5 from '../img/settlers/settlers-draft3.png';

import vin1 from '../img/vindermere/vindermere-screenshot.png';
import vin2 from '../img/vindermere/vindermere-screenshot2.png';
import vin3 from '../img/vindermere/vindermere-screenshot3.png';
import vin4 from '../img/vindermere/vindermere-auth.png';
import vin5 from '../img/vindermere/vindermere-build-character.png';
import vin6 from '../img/vindermere/vindermere-combat.png';
import vin7 from '../img/vindermere/vindermere-editor.png';
import vin8 from '../img/vindermere/vindermere-items.png';
import vin9 from '../img/vindermere/vindermere-market.png';

import guitar1 from '../img/chordFinder/guitar1.png';
import guitar2 from '../img/chordFinder/guitar2.png';
import guitar3 from '../img/chordFinder/guitar3.png';
import guitar4 from '../img/chordFinder/guitar4.png';
import guitar5 from '../img/chordFinder/guitar5.png';
import guitar6 from '../img/chordFinder/guitar6.png';

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
        images: [settlers1, settlers2, settlers3, settlers4, settlers5],
        technologies: [REACT, NODE, SQL],
        techs: ["ReactJS", "Node.js", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt", "Socket.io", "GreenSock", "Photoshop"],
        description: "Fully playable, responsive web-version of board game Settlers of Catan (Catan Studio).  Styling is done with Sass/Css and animations are done with Greensock. The game is fully functional as per the rules stated on Catan Studio's website.  Socket.io connects the players and updates the game state multiple times per turn to keep players up to date on dice rolls, resources received, trades offered, etc.  Game goes until one player reaches 10 points.  The biggest challenge was working with a hexagonal map.  Each hexagonal tile has six slots each for roads and settlements, and each of those slots needs to know what tiles and slots are adjacent.  With a grid of squares this is simple, but the hexagons changed the equation so that it is not as obvious what tiles are connected in the underlying data.  This was not built for production and I am not associated with Catan Studio."
    },
    {
        title: "Vindermere",
        url: "http://vindermere.com/",
        github: "https://github.com/Arcade-Game/dungeon-crawler",
        images: [vin4, vin1, vin2, vin3, vin5, vin6, vin7, vin8, vin9],
        technologies: [REACT, NODE, MONGO, SQL],
        techs: ["ReactJS", "Node.js", "MongoDB", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt", "GreenSock", "Photoshop"],
        description: "Top down, fantasy-style dungeon crawler.  Game engine was built completely from scratch using React.  Game engine retrieves the current map of the user from the Mongo database.  Maps are stored as arrays of arrays of objects, with each object correlating to a tile on the character display.  The 9x9 character display is created with a for loop that starts 4 arrays above the character Y index and ends 4 arrays below the character Y index, and slices from 4 elements left of the character X index to 4 elements right of the character X index, rendering a smaller 9x9 grid that updates when the arrows keys (or WASD) change the character X and Y indexes.  Minimap in the corner displays tiles where explored === true, which happens when tiles are rendered in the character view.  There are more than 12 terrain types, 4 elevations, 4 tile modifiers (i.e. mist covering the tile making it hard to see), and 12 tile objects such as monster, chest, and teleporter.  Each of these different categories can exist on the others (i.e, a chest can be on a cliff with rough terrain, underneath mist).  There is also a pushable boulder, which acts as the third elevation.  Climbing onto it from the second elevation opens up the fourth elevation, which can only be moved onto if you are already standing on a boulder.  Boulders can be pushed onto different terrain types, with different effects.  Pushing a boulder into water creates a permanent bridge, while pushing a boulder into lava creates a temporary bridge for one turn.  Pushing a boulder into a teleporter transports the rock to a a different point on the map, and destroys the teleporter.  Pushing a boulder from atop a cliff onto a monster kills the monster and earns 15 experience points. Each unique terrain has a different effect.   The combat view is toggled when the character steps on a tile inhabited by a monster.  The character and monster alternate turns choosing attack moves.  The moves available to a character are determined by the weapon that is equipped (or not equipped).  Each move alters the player stats uniquely (one move might raise attack for one turn but lower defense for one turn, etc.).  Combat ends when character or monster HP <= 0.  Experience points are earned from defeating monsters, crushing monsters, finishing quests, and completing dungeons.  Your level when you complete a dungeon is then converted into 'Honor' back in the town, which accumulates for a player to earn 'Titles' from 'Peasant' to 'King'.  Each player's progress is stored in a SQL database hosted by Heroku.  We practiced continual production with this project, making sure we published a working version daily."
    },
    {
        title: "Sudoku",
        url: "vindermere.com",
        github: "https://github.com/jondeh/gameRyan.com",
        images: [],
        technologies: [REACT, NODE, SQL],
        techs: ["ReactJS", "Node.js", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "This was my first full CRUD website.  The sudoku solver algorithm solves any sudoku puzzle where there is only one solution.  For easy puzzles, this means checking every square and filling in the square where there is only one possible number.  Then checking every row, column, and box, and filling in the squares when there is only one square a number can go in that row, column, or box.  The algorithm then moves on to checking for doubles and triples, removing the possible numbers for each square that are disqualified because of the doubles and triples methods.  The algorithm repeats this process until every square is filled.  The generator algorithm retrieves a 'seed' puzzle from the selected difficulty (easy, medium, or hard) from the SQL database.  There are 50 seed puzzles for each difficulty.  Once the seed puzzle is retrieved, the generator algorithm modifies the numbers and rotates the grid one of eight possible directions. These modifications create more than 100,000 possible puzzles.  Selecting a difficult starts the timer which ends when the puzzle is correctly solved.  User's times are stored in the SQL database.  Database was challenging for a first full CRUD website as there were many join statements."
    },
    {
        title: "Chord Finder",
        url: null,
        github: "https://github.com/jondeh/no-db",
        images: [guitar6, guitar1, guitar3, guitar4, guitar5, ],
        technologies: [REACT, NODE, SQL],
        techs: ["ReactJS", "Node.js", "PostGreSQL", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "Virtual guitar fretboard, made initially as a no-database project, later updated to include a database.  Connects to a public API for a database containing the combinations of notes pressed on a guitar.  Chord Finder records the placement of the notes that you click on the virtual fretboard, and retrieves the exact chord from the database, letting you discover new chords to play, and letting you store your favorites in a SQL database.  Fretboard was created with overlapping CSS Grids.  Styling is conditional as well.  Choose between six different stylings for the fretboard, and two different themes for the website. This is the first project I ever built."
    },
    {
        title: "Pathfinding Visualizer",
        url: null,
        github: "github.com",
        images: [],
        technologies: [REACT, NODE, MONGO],
        techs: ["ReactJS", "Node.js", "MongoDb", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "Visualize Dijkstra's pathfinding algorithm.  Select a grid-size and a starting point and an ending point.  Draw barriers which the algorithm will have to work around.  The grid then animates to represent how the algorithm searches for the endpoint.  When the endpoint is discovered, the shortest path is animated in a different color."
    },
    {
        title: "Paint",
        url: null,
        github: "github.com",
        images: [],
        technologies: [REACT, NODE, MONGO],
        techs: ["ReactJS", "Node.js", "MongoDb", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "A replica of Microsoft Paint, made from scratch with React."
    },
    {
        title: "Map Editor",
        url: null,
        github: "https://github.com/jondeh/map-editor",
        images: [],
        technologies: [REACT, NODE, MONGO],
        techs: ["ReactJS", "Node.js", "MongoDb", "HTML", "CSS", "Express", "Massive", "BCrypt"],
        description: "This is a generic game-map editor.  Three engines currently connect to it.  The first is the dungeon crawler also posted on this portfolio.  The second is a simple side-scroller video game.  The third is for larger grids for a game engine akin to what you will find in Clash of Clans or Tribal Wars.  Select which engine you are building for, and there are a set of pre-selected tiles from which to build a map from.  Or you can build custom tiles which then get added to that engine's database.  When you save the map, it is automatically saved to the correct Mongo database, and can be tested immediately using the selected game engine, or can be retrieved in game.  The biggest challenge was connecting different game engines (all custom engines built by me) so that when one is selected EVERYTHING changes, including the connected database, the engine which is deployed when you 'test', and the object tiles which are accessible."
    },
]