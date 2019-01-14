import React from 'react';
import { shallow } from 'enzyme';
import { Header as HeaderComponent } from "../src/components/Header";

describe('should render Header correctly', () => {
  const tree = shallow(
      <HeaderComponent />
    );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});