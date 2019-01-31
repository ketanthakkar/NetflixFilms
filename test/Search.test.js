import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import Search from '../src/components/Search';

describe('should render Search correctly', () => {
  const tree = shallow(
      <Router keyLength={0}>
        <Search />
      </Router>,
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
