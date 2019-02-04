import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import Search, { getSearch, mapStateToProps } from '../src/components/Search';

describe('should render Search correctly', () => {
  const tree = shallow(
      <Router keyLength={0}>
        <Search />
      </Router>,
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should get search', () => {
    const state = {
      search: "star",
    };
    const expected = "star";

    expect(getSearch(state)).toEqual(expected);
  })

  test('should map state to props', () => {
    const selector = mapStateToProps.resultFunc;
    const expected = {
        activeSearchBy: 'title',
        searchStr: 'star',
    };

    expect(selector({ searchBy: 'title', searchStr: 'star' })).toEqual(expected);
  })

});
