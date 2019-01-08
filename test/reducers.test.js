import * as reducerTypes from '../src/reducers/index';
import * as actionsTypes from '../src/actions';

describe('Search reducers', () => {
    
    it('should handle FILTER_MOVIES', () => {
      const mock = {
        type: actionsTypes.FILTER_MOVIES,
        searchStr: 'Fifty'
      };
      
      expect(reducerTypes.search({}, mock)).toStrictEqual({searchStr: 'Fifty'});
    });

    it('should handle FILTER_MOVIES_BY', () => {
        const mock = {
          type: actionsTypes.FILTER_MOVIES_BY,
          searchby: 'Title'
        };
        
        expect(reducerTypes.search({}, mock)).toStrictEqual({searchby: 'Title'});
    });
});

describe('Sort reducers', () => {
    
    it('should handle SORT_MOVIES', () => {
      const mock = {
        type: actionsTypes.SORT_MOVIES,
        sortby: 'release_date'
      };
      
      expect(reducerTypes.sortBy({}, mock)).toStrictEqual({sortby: 'release_date'});
    });

});

describe('movie reducers', () => {

    it('should handle RECEIVE_MOVIES', () => {
        const mock = {
          type: actionsTypes.REQUEST_MOVIES, 
        };
        
        expect(reducerTypes.movies({}, mock)).toStrictEqual({});
    });
});