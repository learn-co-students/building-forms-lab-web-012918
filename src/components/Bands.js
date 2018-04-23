import React, { Component } from 'react';

class Bands extends Component {

  renderBands = () => {
    return this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })
  }

  render(){
    return (
      <div>
        {this.renderBands()}
      </div>
    );
  }
};

export default Bands;
