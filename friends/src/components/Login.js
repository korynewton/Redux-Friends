import React, { Component } from 'react'

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            credentials : {
                username: '',
                password: ''
            }
        }
    }
changeHandler = e => {
    this.setState({
        credentials : {
            ...this.state.credentials,
            [e.target.name] : e.target.value
        }
    })
}

  render() {
    return (
      <form>
        <input onChange={this.changeHandler} type="text" placeholder="username" name="username" value={this.state.username}/>
        <input onChange={this.changeHandler} type="password" placeholder="password" name="password" value={this.state.password}/>
        <button>Sign in</button>
      </form>
    )
  }
}

export default Login
