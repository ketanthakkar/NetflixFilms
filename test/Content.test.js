import React from 'react';
import { mount, shallow } from 'enzyme';
import Content from "../src/components/Content";
import Filter from "../src/components/Filter";

const movieData = [{
    "id": 337167,
    "title": "Fifty Shades Freed",
    "tagline": "Don't miss the climax",
    "vote_average": 6.1,
    "vote_count": 1195,
    "release_date": "2018-02-07",
    "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "budget": 55000000,
    "revenue": 136906000,
    "genres": [
    "Drama",
    "Romance"
    ],
    "runtime": 106
}];

describe('should render Content component', () => {
    const tree = shallow(<Content movies={movieData} records={10} />);
    test('Snapshot test', () => {   
        expect(tree).toMatchSnapshot();
    });

    test('should render Content component with number of records', () => {
        const count = 10;
        const tree = mount(<Content movies={movieData} records={count} />);
        expect(tree.find(Filter).prop('movieCount')).toEqual(count);
    });
});



