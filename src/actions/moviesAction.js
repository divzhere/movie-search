import axios from 'axios'
import { MOVIES_SEARCH, MOVIES_ERROR } from '../types/movies'

export const getMovies = input => async dispatch => {
    try{
       const res = await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${input}`);

        dispatch({
            type: MOVIES_SEARCH,
            payload: res.data 
        });
    } catch(err) {
        dispatch({
            type: MOVIES_ERROR,
            payload: ''  
        });
    }
}
