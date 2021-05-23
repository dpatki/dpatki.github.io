import React from "react"
import {Link} from 'react-router-dom'
import temp from "./assets/me.jpg";
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component

function About(props) {
    return (
        <div>
            <h1>Hi! I'm a SE '25 at UWaterloo!</h1>
            <Thumbnail
            link = "https://github.com/dpatki"
            image = {temp}
            title= ""
            category = ""
            />
            <h3>I'm not currently looking for work, but take a look at my resume!</h3>
            <div className = "text-wrapper">
                <p className = "blag-text">
                I'm a programmer who does all kinds of things in a wide variety of languages - from Python to JS to C++, I'll do it all!
                I'm reasonably well versed in Full-stack development and Machine Learning, but I'm really excited to pick up new skills as I gain experience.
                </p>
            </div>
            
        </div>
    )
}
export default About;