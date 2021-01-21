import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a6TTqoEXZ219siAF5ghHxbxdGstxrvUJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`




// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ''
    }
    
    handleSubmit= (e) => {
        e.preventDefault()
        debugger
        fetch(URL.concat('', this.state.searchTerm))
        .then(r => r.json())
        .then(reviews => this.setState({ reviews: reviews.results}))
        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={e => this.setState({ searchTerm: e.target.value})}></input>
                    <input type="submit"></input>
                </form>
                <h3>Searched Movies</h3>

                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
