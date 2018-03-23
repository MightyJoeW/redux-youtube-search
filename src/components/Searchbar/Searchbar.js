// External Dependencies
import React from 'react';

// Component Definition
const Searchbar = props => (
  <div>
    <form>
      <input type="text" placeholder="Search" onChange={props.change}></input>
    </form>
    <p>Destructuring</p>
  </div>
)

export default Searchbar;