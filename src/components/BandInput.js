import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleInputChange(e){

    this.setState({
      text: e.target.value
    }, () => console.log(this.state.text))
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text,
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.text} onChange={(e) => this.handleInputChange(e)} />
        <input type='submit' />
      </form>
      </div>
    );
  }
};

export default BandInput;
