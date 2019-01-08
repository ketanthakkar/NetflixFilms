import React from 'react';
import { mount } from 'enzyme';
import Footer from "../src/components/Footer";

describe('should render Footer correctly', () => {
  const tree = mount(<Footer />);
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
