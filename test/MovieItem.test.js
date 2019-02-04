import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import MovieItem from '../src/components/MovieItem';

describe('should renders MovieItem correctly', () => {
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
  const tree = mount(<Router keyLength={0}><MovieItem key={ movieData.id } movieItem={ movieData }/></Router>);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
