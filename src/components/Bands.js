import React, { Component } from 'react';

class Bands extends Component {

  renderBands = () => {
      return this.props.store.getState().bands.map((band,index) => {
        return <li key={index}>{band}</li>
      })
  }

  render(){
    // debugger
    return (
      <div>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    );
  }
};

export default Bands;
