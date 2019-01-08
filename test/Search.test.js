import React from 'react';
import { mount } from 'enzyme';
import Search from "../src/components/Search";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('should render Search correctly', () => {
  const tree = mount(
    <Provider store={store}>
      <Search />
    </Provider>  
  );
  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });
});
