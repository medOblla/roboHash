import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Robo Hash</h1>
        <div className="row lead col-12 mt-6 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <div className="col-6">
            <input
              type="text"
              className="form-control mb-5"
              id="search"
              aria-describedby="searchHelp"
              placeholder="Search ..."
              onChange={(e) => this.props.handleSearch(e)}
            />
          </div>
          <div className="col-6">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => this.props.changeColor(e)}
            >
              <option value="white">Default</option>
              <option value="#f14668">Red</option>
              <option value="#fbeeac">Yellow</option>
              <option value="#a4ebf3">Blue</option>
              <option value="#c7ffd8">Green</option>
              <option value="#ffc75f">Gold</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
