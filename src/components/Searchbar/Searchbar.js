import React, { Component } from "react";
export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <input onChange={this.onInputChange} />
      </div>
    );
  }
  onInputChange(e) {
    console.log(e.target.value);
  }
}
