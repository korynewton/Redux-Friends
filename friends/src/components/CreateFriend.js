import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="name" name="name"/>
        <input type="text" placeholder="age" name="age"/>
        <input type="text" placeholder="email" name="email"/>
        <button>Add</button>
      </form>
    )
  }
}

export default Login
