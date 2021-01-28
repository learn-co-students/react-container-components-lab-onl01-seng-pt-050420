import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EWIliyepqA2l7KEAAM4UlgWpprAWSnAX';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL + `&query=${this.state.searchTerm}`}`)
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.reviews}))
    }

    handleSearchInputChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input
                        id="search-input"
                        type="text"
                        style={{ width: 300 }}
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
