import React from 'react';
import { mount } from 'enzyme';
import { Search as SearchComponent } from "../src/components/Search";
import { BrowserRouter as Router } from 'react-router-dom';

describe('should render Search correctly', () => {
  const tree = mount(
      <Router>
        <SearchComponent />
      </Router>
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
