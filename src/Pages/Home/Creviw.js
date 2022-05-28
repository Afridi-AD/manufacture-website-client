import React from 'react';

const Creviw = () => {
    const handleReview = event =>{
        event.preventDefault()
        
       const review = {
          
          
          
          
          name : event.target.name.value,
          location : event.target.location.value,
          img : event.target.imgUrl.value,
          review : event.target.comments.value
        }
        fetch('http://localhost:5000/review',{
          method : 'POST',
          headers :{
            'content-type' : 'application/json'
    
          },
          body : JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data);
          
            
        })
       
      }
    
    return (
        <div>

            <h1 className='text-3xl text-purple-500 mt-5 mb-3'>Say something about our company !!</h1>
            <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

            <input type="text" name='name' placeholder="Name" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='location' placeholder="Location" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='imgUrl' placeholder="Image" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='comments' placeholder="Your comments" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="Send Review" class="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Creviw;