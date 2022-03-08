/* eslint-disable react/prop-types */
import React from 'react'

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameCHange = this.handleNameCHange.bind(this);
  }

  handleNameCHange(event) {
    event.preventDefault();
    this.props.onChange(event.target.querySelector('input').value)
  }

  render() {
    return (
      <form action="" onSubmit={this.handleNameCHange}>
        <Input></Input>
        <Button></Button>
      </form>
    );
  }
}

function Input(){
  return (
    <input type="text" placeholder='Who are you, sweetie?' />
  )
}

function Button(){
  return (
    <button>*touch me gently*</button>
  )
}