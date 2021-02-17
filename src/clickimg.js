import React from 'react'; // Import the Component component from React
import './App.css';
 
function Click(props) {
  return (
    <div className="project">
       <a href={props.link}><img src={props.image} alt="Project Image"/></a>
    </div>
  );
}
 
export default Click;