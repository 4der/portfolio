import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Header from "./header"


class App extends React.Component {



  render() {
    return (
      <div>
        <BrowserRouter>
      <div>
       <Header />

          <div className="links">
          <button><a><Link to="/">Home</Link></a></button>
          <button><Link to="about">About</Link></button>
      </div>

         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />


      </div>
      </BrowserRouter>

    </div>


    )
  }

}

export default App
