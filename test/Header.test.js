import React from 'react';
import { mount } from 'enzyme';
import Header from "../src/components/Header";

describe('should render Header correctly', () => {
  const tree = mount(<Header />);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});