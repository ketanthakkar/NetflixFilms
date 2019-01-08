import React from 'react';
import { mount } from 'enzyme';
import Search from "../src/components/Search";

describe('should render Search correctly', () => {
  const tree = mount(<Search />);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
