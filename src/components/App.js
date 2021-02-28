import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hogs from './Hogs'
import hogs from "../porkers_data";
import Sort from './Sort'
import HelloWorld from "./HelloWorld";

class App extends Component {

  constructor() {
    super()
    this.state = { hogs }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Sort hogs={this.state.hogs} />
        <br/>
        <Hogs hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
