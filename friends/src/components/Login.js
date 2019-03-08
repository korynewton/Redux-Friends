import React, { Component } from 'react'
import { login } from '../actions'
import { connect } from 'react-redux'

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

requestLogin = (e) => {
    e.preventDefault()
    this.props.login(this.state.credentials)
    this.props.history.push('/friends')
}

  render() {
    return (
      <form onSubmit={this.requestLogin}>
        <input onChange={this.changeHandler} type="text" placeholder="username" name="username" value={this.state.username}/>
        <input onChange={this.changeHandler} type="password" placeholder="password" name="password" value={this.state.password}/>
        <button>Sign in</button>
      </form>
    )
  }
}

export default connect(null, { login })(Login) 
