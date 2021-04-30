import React from "react"
import {Link} from 'react-router-dom'
import temp from "./me.jpg";
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component

function About(props) {
    return (
        <div>
            <h1>Hi! I'm a 1B SE student at UWaterloo!</h1>
            <Thumbnail
            link = "https://github.com/dpatki"
            image = {temp}
            title= ""
            category = ""
            />
            <h3>Currently looking for work - take a look at my resume!</h3>
        </div>
    )
}
export default About;