import git from './github.png';
import linkedin from './linkedin.png';
import mailto from './email2.png';
import resume from './document-icon.png';
import './App.css';
import hireme from './resume.pdf';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <h1>Dhananjay Patki</h1>
        <p>
          Software Engineering @ University of Waterloo
        </p>
        <div>
          <a href="https://github.com/dpatki"><img src={git} alt= "Github" style={{maxWidth:35} }></img> </a>
          <a href="https://linkedin.com/dhananjay-patki"><img src={linkedin} alt= "Linkedin" style={{maxWidth:110} }></img> </a>
          <a href="mailto:dpatki@uwaterloo.ca"><img src={mailto} alt= "Email"style={{maxWidth:35} }></img> </a>
          <a href={hireme}><img src={resume} alt= "Resume"style={{maxWidth:35} }></img> </a>
        </div>
      </header>
      <div className="navigation">
        <div className="links-Wrapper">
            <span className="links"><Link to="/" className="item">Projects</Link></span>
            <span className="links"><Link to="/articles" className="item" >Articles</Link></span>
            <span className="links"><Link to="/about" className="item" >About</Link></span>
        </div>
      </div>
    <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
    </div>
    <footer className="App-footer">
     
    <div className= "icon-Wrapper">
          <a href="https://github.com/dpatki"><img src={git} alt= "Github" style={{maxWidth:35} }></img> </a>
          <p>      •      </p>
          <a href="https://linkedin.com/dhananjay-patki"><img src={linkedin} alt= "Linkedin" style={{maxWidth:110} }></img> </a>
          <p>      •      </p>
          <a href="mailto:dpatki@uwaterloo.ca"><img src={mailto} alt= "Email"style={{maxWidth:35} }></img> </a>
          <p>      •      </p>
          <a href={hireme}><img src={resume} alt= "Resume"style={{maxWidth:35} }></img> </a>
        </div>
      <div className="links-Wrapper">
            <span className="links"><Link to="/" className="item">Projects</Link></span>
            <span className="links"><Link to="/articles" className="item" >Articles</Link></span>
            <span className="links"><Link to="/about" className="item" >About</Link></span>
      </div>
      <div className="bottom-text">
        <p>
        Found a bug? Email me and I'll swat it!
        </p>
      </div>
      <div className= "bottom-text">
       <p>
        Copyright (c) Dhananjay Patki 2021
      </p>
      </div>
    </footer>
    </BrowserRouter>
  );
}

export default App;
