import axios from 'axios'
import { MOVIES_SEARCH, MOVIES_ERROR } from '../types/movies'

export const getMovies = input => async dispatch => {
    //console.log("ENTERS ACTION")
    try{
       const res = await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${input}`);
     //   console.log("REQUEST SENT")
        dispatch({
            type: MOVIES_SEARCH,
            payload: res.data.data 
        });
    } catch(err) {
       // console.log("REQUEST ERROR")
        dispatch({
            type: MOVIES_ERROR,
            payload: ''  
        });
    }
}
