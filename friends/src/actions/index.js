import axios from 'axios'
import axiosAuth from '../axiosAuth'

export const LOGGING_IN = "LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const SAVING_FRIENDS = "SAVING_FRIENDS"
export const UPDATING_FRIENDS = "UPDATING_FRIENDS"
export const UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL"
export const ERROR = "ERROR"


export const login = creds => dispatch => {
    dispatch({ type : LOGGING_IN });
    return axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS })
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.log("error: ", err))
}

export const retrieveFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS })
    axios.get("http://localhost:5000/api/friends", { 
        headers: { Authorization: localStorage.getItem('token')}
    })
    .then(res => {
        // console.log("res", res.data)
        dispatch({ type: SAVING_FRIENDS, payload: res.data })
    })
    .catch(err => {
        dispatch( { type: ERROR, payload: "error" })
    })
}
   
export const addFriend = friend => dispatch => {
    console.log('inside Add friend')
    dispatch({ type: UPDATING_FRIENDS })
    axiosAuth().post('http://localhost:5000/api/friends', friend)
    .then(res => {
        dispatch({ type: UPDATE_SUCCESSFUL, payload: res.data})
    })
    .catch(err => {
        console.log('ERR: ', err)
        dispatch( { type: ERROR, payload: "error" })
    })
}