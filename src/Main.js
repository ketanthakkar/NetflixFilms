import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ErrorBoundary from './error/ErrorBoundary';
import Movie from './components/Movie';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            movieData: [],
        }
    }
    
    componentDidMount() {
        fetch(`http://react-cdp-api.herokuapp.com/movies`)
        .then(response => response.json())
        .then(result => this.setState({ movieData: result }));
    }

    render() {
        const {movieData} = this.state;
        
        return ( 
            <div className="main">
                <Header />  
                { movieData.data && 
                    <ErrorBoundary>
                        <Content movies={ movieData.data } records={ movieData.limit } />
                    </ErrorBoundary> 
                }
                <Footer />
                {/* Movie Detail page <Movie movie={ movieData.data } /> */}
            </div>
        );
    }
}

export default Main;