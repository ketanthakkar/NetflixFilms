import React from 'react';
import { mount } from 'enzyme';
import { Search as SearchComponent } from "../src/components/Search";
import { MemoryRouter as Router } from 'react-router-dom';

describe('should render Search correctly', () => {
  const tree = mount(
      <Router keyLength={0}>
        <SearchComponent />
      </Router>
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
