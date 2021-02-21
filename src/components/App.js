import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hogs from './Hogs'
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { hogs }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Hogs hogs={this.state.hogs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hogs: state.hogs.map(hog => hog)
  }
}

export default App;
