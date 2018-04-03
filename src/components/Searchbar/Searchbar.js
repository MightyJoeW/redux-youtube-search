import React, { Component } from 'react';

const styles = {
  fontSize: '0.8em',
  height: '2.5em',
  marginLeft: '3em',
  marginRight: '0.5em',
  paddingLeft: '0.5em',
  width: '45em',
}

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div>
        <input
          style={styles}
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
          placeholder='Search'
        />
      </div>
    )
  }
}