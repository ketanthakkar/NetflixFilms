import React from 'react';
import { shallow } from 'enzyme';
import Filter from "../src/components/Filter";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('should renders Filter correctly', () => {
  
  test('Snapshot test', () => {
    const tree = shallow(
      <Provider store={store}>
        <Filter movieCount={10}/>
      </Provider>);
    expect(tree).toMatchSnapshot();
  });

});
