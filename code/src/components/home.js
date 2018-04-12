import React from "react"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home">
      <h1 className="homeWelcome">welcome!</h1>
      <div className="container">

        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>
        <div className="box">
        <img src={require("../images/cat.jpg")}/>
        </div>

      </div>
      <footer className="homeEmail">mail: adamsson.erika@gmail.com</footer>
     </div>
   )
  }
}


export default Home
