// Code MovieReviews Here
import React from 'react';

const MovieReviews = props =>{
    return(
        <div className="review-list"> 
            {props.reviews.map(review =>
             <div key={review.headline} className="review">
              <h3>{review.headline}</h3> 
              <p>{review.summary_short}</p> 
             </div>  
         )}              
        </div>
    )
}

export default MovieReviews