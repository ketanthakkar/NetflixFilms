import { REQUEST_MOVIES, RECEIVE_MOVIES, RECEIVE_MOVIES_DETAIL, FILTER_MOVIES, FILTER_MOVIES_BY, SORT_MOVIES } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    movies: {
      movieData: [],
      movie: null
    },
    search: {
      searchStr: "",
      searchBy: "title"
    },
    sort: { 
      sortBy: "release_date",
    },  
};

export const movies = (state = initialState.movies, action) => {

    switch(action.type) {
        case REQUEST_MOVIES:
            return state 

        case RECEIVE_MOVIES:
            return {
                ...state,
                movieData: action.movies
            }

        case RECEIVE_MOVIES_DETAIL:
            return {
                ...state,
                movie: action.movie,
            } 
            
        default:
            return state;
    }
}

export const search = (state = initialState.search, action) => {
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

export const sortBy = (state = initialState.sort, action) => {
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
