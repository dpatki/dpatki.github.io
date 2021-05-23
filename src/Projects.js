import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import mandelbrot from "./assets/newmandelbrot.png";
import connections from "./assets/connections.png";
import garden from "./assets/garden.png";
import mate from "./assets/mate.png";
import leet from "./assets/leet.png";
import rlogo from "./assets/react.png";
function Projects(props) {
    return (
        <div>
        <div><h1>Projects!</h1></div>
        
        <div className = "projects-Wrapper">
            
            <span className="links">
            <Thumbnail
            link = "https://github.com/dpatki/COVID-Connections"
            image = {connections}
            title= "Covid Connections"
            category = "Track Your Risk"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/smart-garden"
            image = {garden}
            title= "Smart Garden"
            category = "Automatic Plant Care"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/Cli-Mate"
            image = {mate}
            title= "Cli-Mate"
            category = "Sustainability Buddy"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/random-coding-stuff"
            image = {mandelbrot}
            title= "Small Projects"
            category = "C, Rust, & Python"
            />
            </span>
            <span  className="links">
            <Thumbnail
            link = "https://github.com/dpatki/dpatki.github.io"
            image = {rlogo}
            title= "This Website"
            category = "View Github Repo"
            />
            </span>
            <span className="links">
                <Thumbnail
                    link = "https://github.com/dpatki/leetcode-problems"
                    image = {leet}
                    title = "LeetCode"
                    category = "Submissions to Problems"
                />
            </span>
        </div>
        </div>
    )
}
export default Projects;