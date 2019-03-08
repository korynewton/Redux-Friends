import React from 'react'
import { connect } from 'react-redux'
import { retrieveFriends } from '../actions' 

const Friends = (props) => {
  return (
    <div>
        <h3>Friends:</h3>
        <button onClick={props.retrieveFriends}>Fetch Friends!</button>
      {props.friends.map(item => <h5 key={item.id}>{item.name}</h5>)}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, { retrieveFriends } )(Friends)
