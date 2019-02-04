import React from 'react';
import { shallow } from 'enzyme';
import Movie, { getMovie, mapStateToProps } from '../src/components/Movie';

describe('should render Movie correctly', () => {
  const movieData = {
    id: 337167,
    title: 'Fifty Shades Freed',
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: '2018-02-07',
    poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview: 'Believing they have left behind shadowy figures from their past',
    budget: 55000000,
    revenue: 136906000,
    genres: [
      'Drama',
      'Romance',
    ],
    runtime: 106,
  };
  const tree = shallow(<Movie movie={ movieData }/>);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should get movie', () => {
    const state = {
      movies: "star",
    };
    const expected = "star";

    expect(getMovie(state)).toEqual(expected);
  })

  test('should map state to props', () => {
    const selector = mapStateToProps.resultFunc;
    const expected = {
      movie: 'star',
    };

    expect(selector({ movie: 'star' })).toEqual(expected);
  })

});
