import React, { Component } from 'react';
// import Band from "./Band.js"

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map((band, index) => {
      // debugger
      return <li key={index}>{band}</li>
    })

    return (
      <ul>
      {bands}
      </ul>
    );
  }
};

export default Bands;
