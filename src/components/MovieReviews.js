import React from 'react'

const MovieReviews = (props) => {
    return (
    <div className="review-list">
        {props.reviews.map(review => {
            return (
                <div key={review.headline} className="review">
                    <header>
                        <a className="review-link" href={review.link.url}>{review.headline}</a>
                    </header>
                    <p>By {review.byline}</p>
                    <blockquote>{review.summary_short}</blockquote>
                    <br/>
                </div> 
            )
        })}
    </div>
    )
}

export default MovieReviews;