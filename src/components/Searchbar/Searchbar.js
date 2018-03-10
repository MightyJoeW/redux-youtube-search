import React, { Component } from "react";

const styles = {
  width: "80px",
  height: "80px",
  borderRadius: "500px"
};

class Searchbar extends Component {
  render() {
    return (
      <div>
        <input style={{ styles }} onChange={this.onInputChange} />
      </div>
    );
  }
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default Searchbar;
