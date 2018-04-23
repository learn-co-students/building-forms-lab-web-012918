import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }

  updateFormValue = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitTheForm = (event) => {
    event.preventDefault()
    let action = {
      type: 'ADD_BAND',
      band: this.state.value
    }
    this.props.store.dispatch(action)
  }

  render() {
    console.log(this.props.store);
    return (
      <div>
        <form onSubmit={this.submitTheForm}>
          <input type='text' value={this.state.text} onChange={this.updateFormValue} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
