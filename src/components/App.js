import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hogs from './Hogs'
import hogs from "../porkers_data";
import Sort from './Sort'

class App extends Component {

  constructor() {
    super()
    this.state = { 
      hogs: hogs, 
      sort: null,
      greased: false
    }
  }

  greasedUp = (event) => {
    (event.target.checked ? this.setState({greased: true}) : this.setState({greased: false}))
    if (this.state.greased === true) {
      this.setState({
        hogs: this.state.hogs.filter(hog => hog.greased === true)
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }
  }

  handleSort = (event) => {
    this.setState({
        sort: event.target.value,
      })
    this.sortHogs()
    }
    
    sortHogs() {
      if (this.state.sort === "name") {
        this.setState({
          hogs: this.state.hogs.sort((a,b) => (b.name < a.name) ? 1 : -1)
        })
      } else if (this.state.sort === "weight") {
        this.setState({
          hogs: this.state.hogs.sort((a,b) => (b.weight < a.weight) ? 1 : -1)
        })
      }
    }

  render() {
    debugger
    return (
      <div className="App">
        <Nav />
        <Sort handleSort={this.handleSort} greasedUp={this.greasedUp}/>
        <br/>
        <Hogs hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;