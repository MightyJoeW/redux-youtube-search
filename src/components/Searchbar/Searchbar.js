import React, { Component } from "react";
export default class Searchbar extends Component {
  render() {
    return (
      <div style={{ gridColumn: "1 / -1", justifySelf: "center" }}>
        <input
          style={{
            borderRadius: "50px",
            width: "500px"
          }}
          onChange={this.onInputChange}
          placeholder="search"
        />
      </div>
    );
  }
  onInputChange(e) {
    console.log(e.target.value);
  }
}
