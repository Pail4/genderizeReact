/* eslint-disable react/prop-types */
import './App.css'
import React from 'react'

class Form extends React.Component {
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

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type="text" placeholder='Who are you, sweetie?' />
    )
  }
}

class Button extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button>*touch me gently*</button>
    )
  }
}

class Warn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Your name must be atleast 2 symbols! <br /> 
      </div>
    )
  }
}


class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.warn) return <Warn></Warn>;
    
    return (
      <div>
        {this.props.gender && <h1>You are {this.props.gender}?</h1>}
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gender: undefined}
    this.setGender = this.setGender.bind(this);
  }

  setGender(name) {
    if  (name.length < 2){
      this.setState({warn: "Name less 2 symbols"});
      return;
    }
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${name}`;
    fetch(url).then(response => response.json())
      .then((obj) => {
        this.setState({ 
          gender: obj.gender,
          warn: false
         })
      })
  }

  render() {
    return (
      <div className='App'>
        <Form onChange={this.setGender} ></Form>
        <Result gender={this.state.gender} warn={this.state.warn}></Result>
      </div>
    );
  }
}

export default App
