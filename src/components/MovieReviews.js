// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return (
        <div className="review-list">
            {props.reviews.map(review => {
                return (
                    <div key={review.display_title} className="review">
                        <span>{review.headline}</span>
                        <p>{review.summary_short}</p>
                        <br />
                        <br />
                    </div>
                );
            })}
        </div>
    )
}

export default MovieReviews;