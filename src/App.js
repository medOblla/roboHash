import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React, { Component } from "react";
import data from "./db/robots";
const robotData = data;

class App extends Component {
  state = {
    cardColors: "",
    searchVal: "",
  };

  changeColor = (e) => {
    this.setState({
      cardColors: e.target.value,
    });
  };

  handleSearch = (e) => {
    this.setState({
      searchVal: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Header
          changeColor={this.changeColor}
          handleSearch={this.handleSearch}
        />
        <Body
          robots={robotData}
          color={this.state.cardColors}
          search={this.state.searchVal}
        />
      </div>
    );
  }
}

export default App;
