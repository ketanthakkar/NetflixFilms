// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { sortMovies, fetchMovies } from '../actions/index';

type Props = {
  movieCount: number,
  activeSorting: String,
  sortMovies: Function,
  fetchMovies: Function
}

export class Filter extends React.Component<Props> {
    handleSortClick = (event: SyntheticEvent<HTMLButtonElement>) => {
      (event.currentTarget: HTMLButtonElement);

      const sortBy = (event.target: window.HTMLButtonElement).id === 'release' ? 'release_date' : 'vote_average';
      this.props.sortMovies(sortBy);
      this.props.fetchMovies();
    };

    render() {
      const { movieCount, activeSorting } = this.props;

      return (
            <section className="filter-container">
                <span className="results">{movieCount} movies found</span>
                <div className="sort-detail">
                    <span>Sort by</span>
                    <span id="release" 
                          className={activeSorting === 'release_date' ? 'highlight-color' : ''} 
                          onClick={this.handleSortClick}>
                      release date
                    </span>
                    <span id="rating" 
                          className={activeSorting === 'vote_average' ? 'highlight-color' : ''} 
                          onClick={this.handleSortClick}>
                      rating
                    </span>
                </div>
            </section>
      );
    }
}

const mapStateToProps = state => ({
  movieCount: state.movies.movieData.length,
  activeSorting: state.sortBy.sortBy,
});

const mapDispatchToProps = {
  sortMovies,
  fetchMovies,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));
