import { LOGGING_IN, LOGIN_SUCCESS, FETCHING_FRIENDS, SAVING_FRIENDS } from '../actions'

const initialState = {
    friends: [],
    deletingFriend : false,
    fetchingfriends : false,
    loggingIn : false,
    savingFriends : false,
    updatingFriends : false,
    error : null
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true
            } 
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loggingIn : false
            }
        case FETCHING_FRIENDS:
            return {
                ...state,
                fetchingfriends : true
            }
        case SAVING_FRIENDS: 
            return {
                ...state,
                fetchingfriends: false,
                friends : action.payload
            }

        

        default:
            return state
    }

}