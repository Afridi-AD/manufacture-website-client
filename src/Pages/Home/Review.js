import React from 'react';

const Review = ({cReview}) => {
  // const {name,img ,location,review}=cReview;
  console.log(cReview)
    return (
        <div className="card lg: max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, deleniti voluptatibus eum ipsa voluptas dolorum!</p>
          <div className="">
          <div className="avatar">
        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={cReview.img} alt='' />
        </div>
      </div>
      <div>
        <h4 className='text-xl'> {cReview.name}</h4>
        <p>{cReview.location}</p>
        <p>{cReview.review}</p>
      </div>
          </div>
        </div>
      </div>
    );
};

export default Review;