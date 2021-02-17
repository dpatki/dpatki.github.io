import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
     
        <div className="project-image">
          <a href={props.link}><img src={props.image} alt={props.title}/></a>
        </div>
        <div className="project-title">
            <a
                className="App-link"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.title}
            </a>
            
        </div>
        <div style={{fontSize: 20}}>{props.category}</div>
    </div>
  );
}
 
export default Thumbnail;