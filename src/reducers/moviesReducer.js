import {
    MOVIES
} from '../types/movies'

const initialState = {
    movies: []
}

export default function MoviesReducer(state = initialState, action){
    switch(action.type){
        case MOVIES:
            return Object.assign({},state,{
                movies: action.payLoad
            })
        default:
            return state
    }
}