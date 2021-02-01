
  
import React from "react";


const MovieReviews = props => {
  console.log(props)
    return (
    <div className="review-list">
      {
        props.reviews.map(review => {
        return <div className="review"> 
        <h1>{review.display_title}</h1>
        <p>{review.summary_short}</p> 
        </div>
      })
      }
    </div>)
}


export default MovieReviews