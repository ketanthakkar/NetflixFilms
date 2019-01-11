import * as moviesActions from '../src/actions';

describe('moviesActions', () => {
    test('should create action to get movies', () => {
        
        const mockData = {data:[{ "title": "Fifty Shades Freed", "title": "TRANSFORMERS"}]};
        
        const expectedAction = {
            type: moviesActions.RECEIVE_MOVIES,
            movies: mockData.data,
        }

        expect(moviesActions.receiveMovies(mockData)).toEqual(expectedAction);
    });

    it('should create action to filter movies', () => {
        const searchStr = 'fifty';
        const expectedAction = {
          type: moviesActions.FILTER_MOVIES,
          searchStr
        };
    
        expect(moviesActions.filterMovies('fifty')).toEqual(expectedAction);
    });

    it('should create action to filter movies by', () => {
        const searchBy = 'title';
        const expectedAction = {
          type: moviesActions.FILTER_MOVIES_BY,
          searchBy
        };
    
        expect(moviesActions.filterMoviesBy('title')).toEqual(expectedAction);
    });

    it('should create action to filter movies by', () => {
        const sortBy = 'release_date';
        const expectedAction = {
          type: moviesActions.SORT_MOVIES,
          sortBy
        };
    
        expect(moviesActions.sortMovies('release_date')).toEqual(expectedAction);
    });

    it('should create correct URL', () => {
        const getState = () => ({
          search: {
            searchStr: 'fifty',
            searchBy: 'title',
          },
          sortBy: { sortBy: 'release_date' },
        });
        const URL = `http://react-cdp-api.herokuapp.com/movies?search=fifty&searchBy=title&sortBy=release_date&sortOrder=desc`;
    
        expect(moviesActions.requestUrl(getState)).toEqual(URL);
    });
})