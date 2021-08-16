import React, { Component } from "react";
import Navbar from "./Navbar.Component";
import Counters from "./Counters.Component";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Counters />
      </>
    );
  }
}

export default App;
