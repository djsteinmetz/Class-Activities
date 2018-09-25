import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
