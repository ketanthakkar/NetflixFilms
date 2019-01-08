export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const FILTER_MOVIES = 'FILTER_MOVIES'
export const FILTER_MOVIES_BY = 'FILTER_MOVIES_BY'
export const SORT_MOVIES = 'SORT_MOVIES'

export const requestMovies = () => ({
    type: REQUEST_MOVIES
})

export const receiveMovies = (json) => {
    return ({
        type: RECEIVE_MOVIES,
        movies: json.data
    });
};

export const filterMovies = (searchStr) => ({
    type: FILTER_MOVIES,
    searchStr
})

export const filterMoviesBy = (searchby) => ({
    type: FILTER_MOVIES_BY,
    searchby
})

export const sortMovies = (sortby) => ({
    type: SORT_MOVIES,
    sortby
})

const requestUrl = (getState) => {
    const state = getState();
    const url = "http://react-cdp-api.herokuapp.com/movies";
    
    const searchStr = state.search.searchStr != "" ? `?search=${state.search.searchStr}` : "";
    const searchBy = state.search.searchStr != "" ? `&searchBy=${state.search.searchby}` : "";
    
    const sortBy = state.sortBy.sortby != "" ? (state.search.searchStr != "" ? `&sortBy=${state.sortBy.sortby}` : `?sortBy=${state.sortBy.sortby}` ) : ""
    const order = state.sortBy.sortby != "" ? "&sortOrder=desc" : "";

    return `${url}${searchStr}${searchBy}${sortBy}${order}`;
}

export const fetchMovies = () => (dispatch, getState) => {
    dispatch(requestMovies())
    const url = requestUrl(getState);

    return fetch(url)
    .then(response => response.json())
    .then(result => {
        dispatch(receiveMovies(result))
    })  
}