import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import temp from "./me.jpg";
function Projects(props) {
    return (
        <div>
        <div><h1>Projects!</h1></div>
        
        <div className = "projects-Wrapper">
            
            <span className="links">
            <Thumbnail
            link = "https://github.com/dpatki/COVID-Connections"
            image = {temp}
            title= "Covid Connections"
            category = "Track Your Risk"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/smart-garden"
            image = {temp}
            title= "Smart Garden"
            category = "Automated Plant Care"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/Cli-Mate"
            image = {temp}
            title= "Cli-Mate"
            category = "Sustainability Buddy"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/random-coding-stuff"
            image = {temp}
            title= "Sudoku Solvers"
            category = "C, Rust, & Python"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/dpatki.github.io"
            image = {temp}
            title= "This Website"
            category = "View Github Repo"
            />
            </span>
        </div>
        </div>
    )
}
export default Projects;