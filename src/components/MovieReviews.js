import React from 'react'

const MovieReviews = (props) => {
    return (

    <div className="review-list">

        {props.reviews.map(review => {

            return (
                <div key={review.headline} className="review">

                    <header>
                        <a className="review-link" href={review.link.url}>{review.headline}</a>
                        <br/>
                        <span className="author">{review.author}</span>
                    </header>
                    
                    <blockquote>{review.summary_short}</blockquote>

                </div> 
            )
        })}

    </div>

    )
}

export default MovieReviews;