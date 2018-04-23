import React, { Component } from 'react';

class Bands extends Component {

  mapTheStore = () => {
    return this.props.store.getState().bands.map(band => <li key={band}>{band}</li>)
  }

  render(){
    console.log(this.props.store.getState().bands);
    return (
      <div>
        <ul>
          {this.mapTheStore()}
        </ul>
      </div>
    );
  }
};

export default Bands;
