import { REQUEST_MOVIES, RECEIVE_MOVIES, FILTER_MOVIES, FILTER_MOVIES_BY, SORT_MOVIES } from '../actions';
import { combineReducers } from 'redux';

export const movies = (state = {movieData: []}, action) => {

    switch(action.type) {
        case REQUEST_MOVIES:
            return state 

        case RECEIVE_MOVIES:
            return {
                ...state,
                movieData: action.movies
            }
            
        default:
            return state;
    }
}

export const search = (state = {searchStr: "", searchBy: "title"}, action) => {
    switch(action.type) {
        case FILTER_MOVIES:
            return { 
                ...state,
                searchStr: action.searchStr
             }

        case FILTER_MOVIES_BY:
            return { 
                ...state,
                searchBy: action.searchBy
             }

        default:
            return state;     
    }
}

export const sortBy = (state = {sortBy: "release_date"}, action) => {
    switch(action.type) {
        case SORT_MOVIES:
            return { 
                ...state,
                sortBy: action.sortBy
             }

        default:
            return state;     
    }
}

export default combineReducers({
    movies, search, sortBy
});
