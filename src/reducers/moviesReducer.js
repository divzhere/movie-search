import {
    MOVIES_SEARCH
} from '../types/movies'

const initialState = {
    searchResults: [],
    loading: true
}

export default function MoviesReducer(state = initialState, action){
    const {type,payload} = action
    switch(type){
        case MOVIES_SEARCH:
         //   console.log("ENTERS REDUCER")
            return Object.assign({},state,{
                ...state,
                loading: false,
                searchResults: payload
            })
        default:
            return state
    }
}