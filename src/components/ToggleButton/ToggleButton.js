// External Dependencies
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
  };

  export default class ToggleButton extends Component {
    handleClick() {
    console.log('yo');
  }
    render() {
      return (
        <div>
          <RaisedButton label='Toggle Theme' labelColor='#3ac1f2' primary={false} style={style} onClick={this.handleClick} />
        </div>
      )
    }
  }

