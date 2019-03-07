import axios from 'axios'
export const LOGGING_IN = "LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const SAVING_FRIENDS = "SAVING_FRIENDS"



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
        console.log("response", res.data)
    })
    .catch(err => console.log(err))
}
   