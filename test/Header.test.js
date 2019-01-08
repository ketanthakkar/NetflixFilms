import React from 'react';
import { mount } from 'enzyme';
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('should render Header correctly', () => {
  const tree = mount(
    <Provider store={store}>
      <Header />
    </Provider>
    );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});