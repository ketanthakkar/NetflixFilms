import fetch from 'isomorphic-fetch'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const RECEIVE_MOVIES_DETAIL = 'RECEIVE_MOVIES_DETAIL'
export const FILTER_MOVIES = 'FILTER_MOVIES'
export const FILTER_MOVIES_BY = 'FILTER_MOVIES_BY'
export const SORT_MOVIES = 'SORT_MOVIES'

const url = "http://react-cdp-api.herokuapp.com/movies";

export const requestMovies = {
    type: REQUEST_MOVIES
}

export const receiveMovies = (json) => {
    return ({
        type: RECEIVE_MOVIES,
        movies: json.data === undefined ? [] : json.data,
    });
};

export const receiveMovieDetail = (json) => {
    return ({
        type: RECEIVE_MOVIES_DETAIL,
        movie: json
    });
};

export const filterMovies = (searchStr) => ({
    type: FILTER_MOVIES,
    searchStr
})

export const filterMoviesBy = (searchBy) => ({
    type: FILTER_MOVIES_BY,
    searchBy
})

export const sortMovies = (sortBy) => ({
    type: SORT_MOVIES,
    sortBy
})

export const requestUrl = (getState) => {
    const state = getState();
    
    return getUrl(state.search.searchStr, state.search.searchBy, state.sortBy.sortBy);
}

export const getUrl = (searchStr, searchBy, sortBy) => {
    const phrase = searchStr != "" ? `?search=${searchStr}` : "";
    const searchType = searchStr != "" ? `&searchBy=${searchBy}` : "";
    
    const sortVal = sortBy != "" ? (phrase != "" ? `&sortBy=${sortBy}` : `?sortBy=${sortBy}` ) : ""
    const order = sortBy != "" ? "&sortOrder=desc" : "";

    return `${url}${phrase}${searchType}${sortVal}${order}`;
};

export const fetchMovies = () => (dispatch, getState) => {
    dispatch(requestMovies)
    const url = requestUrl(getState);

    return fetch(url)
    .then(response => response.json())
    .then(result => {
        dispatch(receiveMovies(result))
    })  
}

export const fetchMovieDetail = (movieId) => (dispatch, getState) => {
    
    return fetch(`${url}/${movieId}`)
    .then(response => response.json())
    .then(result => {
        dispatch(receiveMovieDetail(result))
        const genres = result.genres[0];
        return genres;
    }).then((genres) => fetch(getUrl(genres, "genres", "release_date"))
      .then(res => res.json())
      .then(result => {
            dispatch(receiveMovies(result))
      }))
}

export const fetchSearchedMovies = (phrase) => (dispatch, getState) => {
    
    return fetch(getUrl(phrase, "title", "release_date"))
    .then(response => response.json())
    .then(result => {
        dispatch(receiveMovies(result))
    })  
}