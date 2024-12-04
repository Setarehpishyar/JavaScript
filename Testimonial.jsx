import React from 'react'
import StarRating from './starRating'

const Testimonial = ({item}) => {
  return (
    
    <div className="testimonial">
      <img className="client" src="images/icon.svg" alt="Client Icon"/>

      <div className="star-rating">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-regular fa-star"></i>
      </div>
      <StarRating starRating={item.starRating}/>
      <p>
        {item.comment}
      </p>

      <div className="testimonial-author">
        <img className="profile" src={item.avatarUrl} alt={item.author}/>
        <div className="author">
          <h6 className="name">{item.author}</h6>
          <p className="role">{item.jobRole}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Testimonial
