import React, { Component } from "react";
import Card from "./Card";

class Body extends Component {
  render() {
    if (this.props.search !== "") {
      return (
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {this.props.robots
              .filter((data, key) =>
                data.name
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase())
              )
              .map((data, key) => (
                <Card robot={data} color={this.props.color} key={data.id} />
              ))}
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          {this.props.robots.map((data, key) => {
            return <Card robot={data} color={this.props.color} key={data.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Body;

/*

*/
