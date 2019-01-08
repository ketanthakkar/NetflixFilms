import React from 'react';
import Filter from './Filter';
import MovieItem from './MovieItem';

const Content = ({ movies, records }) => {
    if(movies == null || movies.length <= 0) {
        throw new Error('No Movies Found!');
    }

    return (
        <React.Fragment>
            <Filter movieCount={records} />
            <main className="moviedata-container"> {
                movies.map(movie => <MovieItem key={movie.id} movieItem={movie} />)
            }
            </main>
        </React.Fragment>
    )
}

export default Content;