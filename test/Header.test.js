import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';

describe('should render Header correctly', () => {
  const tree = shallow(
      <Header />,
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
