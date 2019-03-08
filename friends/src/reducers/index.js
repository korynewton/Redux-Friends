import { LOGGING_IN, LOGIN_SUCCESS, DELETING_FRIEND, DELETE_SUCCESSFUL, FETCHING_FRIENDS, SAVING_FRIENDS, UPDATING_FRIENDS, UPDATE_SUCCESSFUL, ERROR } from '../actions'

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
        case UPDATING_FRIENDS:
            return {
                ...state,
                updatingFriends:true
            }
        case UPDATE_SUCCESSFUL:
        return {
            ...state,
            updatingFriends : false,
            friends : action.payload
        }
        case DELETING_FRIEND:
        return {
            ...state,
            deletingFriend: true,
            updatingFriends : true
        }
        case ERROR:
        return {
            ...state,
            deletingFriend : false,
            fetchingfriends : false,
            loggingIn : false,
            savingFriends : false,
            updatingFriends : false,
            error: action.payload
        }
        case DELETE_SUCCESSFUL:
        return {
            ...state,
            deletingFriend:false,
            updatingFriend:false,
            friends: action.payload
        }
        default:
            return state
    }

}