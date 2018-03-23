// External Dependencies
import React from 'react';

// Component Definition

const Searchbar = props => (
  <div>
    <form>
      <input type="text" placeholder="Search" onChange={props.change}></input>
    </form>
  </div>
)

export default Searchbar;