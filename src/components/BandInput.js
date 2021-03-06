import React, { Component } from 'react';

class BandInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({
      text: '',
    })
  }
  handleChange(event) {
      this.setState({
        text: event.target.value,
      });
    }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type= "text"
        value= {this.state.text}
        onChange={(event) => this.handleChange(event)}>
        </input>
        </form>
      </div>
    );
  }
};

export default BandInput;
