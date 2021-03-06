import React from 'react';
import { shallow } from 'enzyme';
import { Filter as SearchComponent } from '../src/components/Filter';

describe('should renders Filter correctly', () => {
  test('Snapshot test', () => {
    const tree = shallow(
        <SearchComponent movieCount={10}/>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('should render Filter component with movieCount', () => {
    const tree = shallow(<SearchComponent movieCount={10}/>);
    expect(tree.find('.results').text()).toEqual('10 movies found');
  });
});
