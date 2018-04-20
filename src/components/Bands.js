import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const mappedBands = this.props.store.getState().bands.map( band => <li>{band}</li>)
    return (
      <div>
        <ul>{mappedBands}</ul>
      </div>
    );
  }
};

export default Bands;
