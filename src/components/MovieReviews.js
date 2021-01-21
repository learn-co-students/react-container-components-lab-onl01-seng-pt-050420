// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(Review)}
        </div>
    )
}

const Review = ({display_title, byline, summary_short}) => {
    return(
        <div className="review">
            <h3>{display_title} </h3>
            <h4>{byline} </h4>
            <p>{summary_short} </p>
        </div>
    )
}


export default MovieReviews