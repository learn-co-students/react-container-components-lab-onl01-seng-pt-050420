import React from 'react';

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

const Review = ({ byline, headline, summary_short, link }) => {
    return (
        <div
            key={headline}
            className="review"
        >
            <header>
                <a
                    className="review-link"
                    href={link.url}
                >
                    {headline}
                </a>
                <br />
                <span className="author">{byline}</span>
            </header>
            <blockquote>{summary_short}</blockquote>
        </div>
    )
}

export default MovieReviews;