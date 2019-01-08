import React from 'react';
import { mount } from 'enzyme';
import Title from "../src/components/Title";

describe('should renders Title correctly', () => {
  const tree = mount(<Title />);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});