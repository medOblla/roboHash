import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        className="card mb-4 shadow-sm"
        style={{ backgroundColor: this.props.color }}
      >
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">
            {this.props.robot.name.charAt(0).toUpperCase() +
              this.props.robot.name.slice(1)}
          </h4>
        </div>
        <div className="card-body">
          <img
            width="200"
            height="200"
            src={this.props.robot.imageUrl}
            className="rounded mx-auto d-block"
            alt="..."
          />
        </div>
        <div className="card-footer">
          <ul className="list-unstyled mt-3 mb-4">
            <li>{this.props.robot.email}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
