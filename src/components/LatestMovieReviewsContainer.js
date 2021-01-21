import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a6TTqoEXZ219siAF5ghHxbxdGstxrvUJ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
   
    state = {
        reviews : []
    }

    fetchData = () =>{
        fetch(URL)
        .then(r=> r.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    componentDidMount() {
        this.fetchData()
    }
   
    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

