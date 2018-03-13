// External Dependencies
import React, { Component } from "react";

// Component Definition
export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      phrase: e.target.value
    });
    console.log(this.state.phrase);
  }

  render() {
    return (
      <div style={{ gridColumn: "1 / -1", justifySelf: "center" }}>
        <input
          value={this.state.phrase}
          style={{ borderRadius: "50px", marginRight: "10px", width: "500px" }}
          onChange={this.onInputChange}
          placeholder="search"
        />
         Value of the input: {this.state.phrase}
      </div>
    );
  }
}
