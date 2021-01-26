import React from "react";

export default function MovieReviews(props) {
  return (
    <div className="review-list">
      <ul>
        {
          props.reviews.map(review => 
            <div className="review">
              <li>
              <h3>{ review.headline }</h3>
              <h4>{ review.byline }</h4>
              <p>{ review.summary }</p>
              </li>
            </div>  
          )
        }
      </ul>
    </div>
  )
}