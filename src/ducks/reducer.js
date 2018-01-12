import axios from 'axios';

const initialState = {
    user: {},
    friends: {}
}

//Declare variables to prevent typos
const GET_USER_INFO = 'GET_USER_INFO'
const EDIT_PROFILE = 'EDIT_PROFILE'
const GET_FRIENDS = 'GET_FRIENDS'

//Actions
export function getUserInfo() {

    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })

    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function editProfile() {
    let editData = axios.put('/editprofile/:first_name/:last_name/:gender/:hobby/:hair_color/:eye_color/:birthday_day/:birthday_month/:birthday_year').then(res => {
        return res.data;
    })

    return {
        type: EDIT_PROFILE,
        payload: editData
    }
}

export function getFriends(){
    let friends = axios.get('/friends/:sort').then(res => {
        return res.data
    })

    return {
        type: GET_FRIENDS,
        payload: friends
    }
}

export default function reducer(state = initialState, action) { //takes in action from the app and state from the store when invoked and outputs a new piece of state
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })//new object that state gets merged into and then action.payload gets merged into
        case EDIT_PROFILE + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_FRIENDS + '_FULFILLED':
            return Object.assign({}, state, { friends: action.payload})
        default:
            return state //is state === state
    }

}