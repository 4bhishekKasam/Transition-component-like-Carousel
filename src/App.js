import React, { Component } from "react";
import data from "./data/data";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  state = { property: data.properties[0] };

  nextProperty = () => {
    let newIndex = this.state.property.index + 1;
    this.setState({ property: data.properties[newIndex] });
  };

  prevProperty = () => {
    let newIndex = this.state.property.index - 1;
    this.setState({ property: data.properties[newIndex] });
  };

  render() {
    const { property } = this.state;
    return (
      <div className="App">
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev{" "}
        </button>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next{" "}
        </button>
        <Home property={property} />
      </div>
    );
  }
}

export default App;
