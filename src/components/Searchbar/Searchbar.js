// External Dependencies
import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */

 const styles = {
  gridColumn: '1 / -1'

 }

 // Component Definition
export default class SearchBar extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div style={styles}>
        <AutoComplete
          animated={true}
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Search Video"
          fullWidth={true}
        />
      </div>
    );
  }
}
