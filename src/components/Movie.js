// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import Title from './Title';
import Footer from './Footer';
import Content from './Content';
import { fetchMovieDetail } from '../actions';

type Props = {
  movie: {
    title: string,
    poster_path: string,
    release_date: string,
    tagline: string,
    genres: Array<string>,
    runtime: string,
    overview: string
  },
  match: {
    params: {
      id: string
    }
  },
  fetchMovieDetail: Function,
}

const HeaderSection = styled.header`
    background-color: rgba(0, 0, 0, 1);
`;

const MoviePoster = styled.section`
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.9)
`;

const MovieDetail = styled.div`
    max-width: 50%;
    color:white;
    padding: 50px 0;

    & > * {
      padding: 5px 0;
      font-size: 18px;
    }

    & > span {
      display: block;
    }
`;

const MovieTitle = styled.span`
    font-size: 28px;
    color: #E2535F;
    font-weight: bold;
`;

const MovieLength = styled.span`
    margin-left: 10px;
`;

const MovieDescription = styled.p`
    width: 70%;
    text-align: justify;
`;

export const getMovie = state => state.movies || {};

class Movie extends React.Component<Props> {
  static fetchData(dispatch, match) {
    return dispatch(fetchMovieDetail(match.params.id));
  }

  componentDidMount() {
    if (this.props.match) {
      this.props.fetchMovieDetail(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match) {
      const { id } = this.props.match.params;
      if (id !== prevProps.match.params.id) {
        this.props.fetchMovieDetail(this.props.match.params.id);
      }
    }
  }

  render() {
    const { movie } = this.props;
    return (
            <React.Fragment>
                { movie
                && <article>
                    <HeaderSection>
                        <Title />
                    </HeaderSection>
                    <MoviePoster>
                        <img className="movie-img" src={movie.poster_path} alt={movie.tagline} />
                        <MovieDetail>
                            <MovieTitle>{movie.title.toUpperCase()}</MovieTitle>
                            <span>{movie.genres.join(' & ')}</span>
                            <div>
                                <span>{movie.release_date}</span>
                                <MovieLength>{`${movie.runtime} min`}</MovieLength>
                            </div>
                            <MovieDescription>{movie.overview}</MovieDescription>
                        </MovieDetail>
                    </MoviePoster>
                    <Content showSearch={false} />
                    <Footer />
                </article> }
            </React.Fragment>
    );
  }
}

const mapDispatchToProps = { fetchMovieDetail };

export const mapStateToProps = createSelector(
  getMovie, 
  (movieData) => ({
    movie: movieData.movie,
  })
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));