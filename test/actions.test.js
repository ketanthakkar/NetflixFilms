import * as moviesActions from '../src/actions'; 

const movieData = {data:[{
    "id": 337167,
    "title": "Fifty Shades Freed",
    "tagline": "Don't miss the climax",
    "vote_average": 6.1,
    "vote_count": 1195,
    "release_date": "2018-02-07",
    "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "budget": 55000000,
    "revenue": 136906000,
    "genres": [
    "Drama",
    "Romance"
    ],
    "runtime": 106
}]};

describe('moviesActions', () => {
    test('should create action to get movies', () => {
        const expectedAction = {
            type: moviesActions.RECEIVE_MOVIES,
            movies: movieData.data
        }

        expect(moviesActions.receiveMovies(movieData)).toEqual(expectedAction);
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
        const searchby = 'title';
        const expectedAction = {
          type: moviesActions.FILTER_MOVIES_BY,
          searchby
        };
    
        expect(moviesActions.filterMoviesBy('title')).toEqual(expectedAction);
    });

    it('should create action to filter movies by', () => {
        const sortby = 'release_date';
        const expectedAction = {
          type: moviesActions.SORT_MOVIES,
          sortby
        };
    
        expect(moviesActions.sortMovies('release_date')).toEqual(expectedAction);
    });
})