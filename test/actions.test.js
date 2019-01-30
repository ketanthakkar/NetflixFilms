import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as moviesActions from '../src/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockState = {
  search: {
    searchBy: 'title',
    searchStr: 'fifty',
  },
  sortBy: 'release_date',
  movies: {
    movieData: ['fifty'],
  },
};

const buildMockStore = () => mockStore({
  search: {
    searchBy: 'title',
    searchStr: 'moviename',
  },
  sortBy: 'release_date',
  movies: {
    movieData: [],
  },
});

describe('moviesActions', () => {
  test('should create action to get movies', () => {
    const mockData = { data: [{ title: 'Fifty Shades Freed'}, {title: 'TRANSFORMERS' }] };

    const expectedAction = {
      type: moviesActions.RECEIVE_MOVIES,
      movies: mockData.data,
    };

    expect(moviesActions.receiveMovies(mockData)).toEqual(expectedAction);
  });

  it('should create action to filter movies', () => {
    const searchStr = 'fifty';
    const expectedAction = {
      type: moviesActions.FILTER_MOVIES,
      searchStr,
    };

    expect(moviesActions.filterMovies('fifty')).toEqual(expectedAction);
  });

  it('should create action to filter movies by', () => {
    const searchBy = 'title';
    const expectedAction = {
      type: moviesActions.FILTER_MOVIES_BY,
      searchBy,
    };

    expect(moviesActions.filterMoviesBy('title')).toEqual(expectedAction);
  });

  it('should create action to filter movies by', () => {
    const sortBy = 'release_date';
    const expectedAction = {
      type: moviesActions.SORT_MOVIES,
      sortBy,
    };

    expect(moviesActions.sortMovies('release_date')).toEqual(expectedAction);
  });

  it('should create correct URL', () => {
    const getState = () => ({
      search: {
        searchStr: 'star',
        searchBy: 'title',
      },
      sortBy: { sortBy: 'rating' },
    });
    const URL = 'http://react-cdp-api.herokuapp.com/movies?search=star&searchBy=title&sortBy=rating&sortOrder=desc';

    expect(moviesActions.requestUrl(getState)).toEqual(URL);
  });

  it('should call receiveMovies on success', () => {
    fetchMock.getOnce('http://example.com/movies?search=fifty&searchBy=title&sortBy=release_date&sortOrder=desc', {
      body: mockState,
      headers: { 'content-type': 'application/json' },
    });

    const store = buildMockStore();
    const response = {
      mockData: mockState,
    };

    const expected = [
      moviesActions.requestMovies,
      moviesActions.receiveMovies(response),
    ];

    return store.dispatch(moviesActions.fetchMovies())
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });
});
