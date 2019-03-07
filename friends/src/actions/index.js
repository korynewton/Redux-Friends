import axios from 'axios'
export const LOGGING_IN = "LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const login = creds => dispatch => {
    console.log("button pressed")
    dispatch({ type : LOGGING_IN });
    axios.post('http://localhost:5000/api/login', creds)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
    //     localStorage.setItem('token', res.data.payload);
    //     dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
    //   });
// }