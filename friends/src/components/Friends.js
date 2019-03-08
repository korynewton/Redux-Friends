import React from 'react'
import { connect } from 'react-redux'
import { retrieveFriends, addFriend } from '../actions' 


class Friends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            age : '' ,
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAdd = (e) => {
        e.preventDefault()
        const friendToAdd = this.state
        this.props.addFriend(friendToAdd)
        this.setState({
            name: '',
            age : '',
            email : ''
        })
    }

    render() {
        return (
            <div>
                <h3>Friends:</h3>
                <button onClick={this.props.retrieveFriends}>Fetch Friends!</button>
              {this.props.friends.map(item => <h5 key={item.id}>{item.name}</h5>)}
            
                <form onSubmit={e => this.handleAdd(e)}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name}/>
                    <input onChange={this.handleChange} type="number" name="age" placeholder="age" value={this.state.age}/>
                    <input onChange={this.handleChange} type="email" name="email" placeholder="email" value={this.state.email}/>
                    <button>Add A Friend</button>
                </form>
            </div>
          )
    } 
  
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, { retrieveFriends, addFriend } )(Friends)
