import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ""
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    });
    this.setState({
      text: ""
    })
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.text} type="text" onChange={this.onChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
