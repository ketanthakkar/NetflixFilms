import React from 'react';
import { mount } from 'enzyme';
import { Search as SearchComponent } from "../src/components/Search";

describe('should render Search correctly', () => {
  const tree = mount(
      <SearchComponent />
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
