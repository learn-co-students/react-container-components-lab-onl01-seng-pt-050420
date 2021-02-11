import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL + "&query=" + this.state.searchTerm)
            .then(response => response.json())
            .then(json => this.setState({
                ...this.state,
                reviews: json.results
            }))
        ;
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search for..." value={this.state.searchTerm} onChange={this.handleChange}></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}