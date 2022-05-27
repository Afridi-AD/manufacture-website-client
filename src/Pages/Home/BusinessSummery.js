import React from 'react';

const BusinessSummery = () => {
    return (
      <div>
          <h1 className='text-4xl mb-5 text-purple-900'>Our Business Summery !!!</h1>
            <div class="stats shadow">
    
    <div class="stat">
      <div class="stat-figure text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      </div>
      <div class="stat-title">Complete Body making</div>
      <div class="stat-value text-primary">25.6K</div>
      <div class="stat-desc">On Time Delivery</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>
      <div class="stat-title">Product Sold</div>
      <div class="stat-value text-secondary">2.6M</div>
      <div class="stat-desc">100% Security</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <div class="avatar online">
          <div class="w-16 rounded-full">
            <img src="https://api.lorem.space/image/face?w=128&h=128" />
          </div>
        </div>
      </div>
      <div class="stat-value">5.5k</div>
      <div class="stat-title">Client Satisfaction</div>
      <div class="stat-desc text-secondary">Quality product</div>
    </div>
    <div class="rating">
        <h1 className='font-3xl'>3.5k Ratings</h1>
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  </div>
  </div>
      </div>
    );
};

export default BusinessSummery;