import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      cardColors: "",
      searchVal: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/mongoRobots")
      .then((response) => {
        this.setState({
          robots: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
          robots={this.state.robots}
          color={this.state.cardColors}
          search={this.state.searchVal}
        />
      </div>
    );
  }
}

export default App;
