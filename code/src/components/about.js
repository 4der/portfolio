import React from "react"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div className="about">
        <h1 className="aboutName"></h1>
         <div className="containerAbout">
          <div className="profilePic">
            <img src={require("../images/ea.png")}/>
          </div>
          <div className="ader">
           <h1>erika adamsson</h1>
          </div>
          <div className="aboutText">
           <p>Hi! <img src={require("../images/wave.png")}/> Nice to e-meet you! Im a junior Front-end Developer from Stockholm.</p>
          </div>
        </div>
         <div className="logos">
          <a href="https://github.com/4der" target="_blank">
          <img src={require("../images/GitHub-Mark-32px.png")}/>
          </a>
          <a href="https://se.linkedin.com/in/erika-adamsson-78767591" target="_blank">
          <img src={require("../images/In-2C-34px-R.png")}/>
          </a>

          </div>
          <footer>
           <div className="email">
            <a href="mailto:adamsson.erika@gmail.com?body= Hello friend!">email me here!</a>
          </div>
          </footer>
    </div>
   )
  }
}



export default About
