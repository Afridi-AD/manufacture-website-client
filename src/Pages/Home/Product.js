import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {name,available,minimum,perUnit,img,description} =product
    const navigate = useNavigate();
    const handlePurchase =()=>{
      navigate('/purchase');
    }

    return (
        <div class=" card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  <img src={img} alt="Car" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class=" text-primary card-title">{name}</h2>
    <p className='text-purple-500'>Price per Unit : {perUnit}</p>
    <p className='text-purple-500'>Available Unit : {available}</p>
    <p className='text-purple-500'>Minimum Order Unit : {minimum}</p>
    <p> <span className='text-green-500'>Description</span> : {description}</p>
    <div class="card-actions">
      <button onClick={handlePurchase} class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;