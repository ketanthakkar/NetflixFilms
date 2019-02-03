import React from 'react';
import { shallow } from 'enzyme';
import Content from '../src/components/Content';

const movies = {
  data: [
    {
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
    },
  ],
};

describe('should render Content component', () => {
  const tree = shallow(
    <Content movies={movies.data} />,
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
