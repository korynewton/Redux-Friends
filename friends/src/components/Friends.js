import React from 'react'
import { connect } from 'react-redux'
import { retrieveFriends, addFriend, deleteFriend, editfriend } from '../actions' 


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

    handleDelete = (e, id) => {
        e.preventDefault();
        this.props.deleteFriend(id)
    } 

    populateEdit = (e, id)  => {
        e.preventDefault()
       const selectedFriend = this.props.friends.find(item => item.id === id)
       this.setState({
           name: selectedFriend.name,
           age: selectedFriend.age,
           email: selectedFriend.email
       })

    }

    handleEdit = (e, friend) => {
        e.preventDefault()
        this.props.editFriend(friend)
    }

    render() {
        return (
            <div>
                <h3>Friends:</h3>
                <button onClick={this.props.retrieveFriends}>Fetch Friends!</button>
              {this.props.friends.map(item => {
                  return (
                      <div key={item.id}>
                          <h5>{item.name}</h5>
                          <button onClick={e => this.handleDelete(e, item.id)}>delete</button>
                          <button onClick={e => this.populateEdit(e, item.id)}>edit</button>
                      </div>
                  )
              })
            }
            
                <form onSubmit={e => this.handleAdd(e)}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name}/>
                    <input onChange={this.handleChange} type="number" name="age" placeholder="age" value={this.state.age}/>
                    <input onChange={this.handleChange} type="email" name="email" placeholder="email" value={this.state.email}/>
                    <button>Add A Friend</button>
                    <button onClick={e => this.handleEdit(e, item)}>Edit Existing Friend</button>
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

export default connect(mapStateToProps, { retrieveFriends, addFriend, deleteFriend, editfriend } )(Friends)
