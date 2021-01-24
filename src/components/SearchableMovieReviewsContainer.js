import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({
            reviews: res.results
        }))
    }

    onChangeHandler = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="search-input">Search Movie Reviews: </label>
                        <input id="search-input" style={{width: 300}} type="text" onChange={this.onChangeHandler} />
                        <button type="submit">Search</button>
                    </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}