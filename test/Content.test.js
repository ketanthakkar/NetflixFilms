import React from 'react';
import { mount, shallow } from 'enzyme';
import Content from "../src/components/Content";
import Filter from "../src/components/Filter";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const movies = { "data": [
    {
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
    }
]
}

const mockState = {
    sortBy: 'release_date',
    movies: {
      movieData: movies.data,
      movieCount: movies.data.length,
      status: 'RECEIVE_MOVIES'
    }
};
  
  const mockStore = configureMockStore();
  const store = mockStore(mockState);

describe('should render Content component', () => {
    const tree = shallow(
        <Provider store={store}>
            <Content movies={movies.data} />
        </Provider>    
        );
    test('Snapshot test', () => {   
        expect(tree).toMatchSnapshot();
    });

});



