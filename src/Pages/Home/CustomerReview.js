import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import Review from './Review';

const CustomerReview = () => {
    const [user] = useAuthState(auth);
    const [cReviews, setReview] = useState([]);
    useEffect(()=>{
        if(user){
            fetch('http://localhost:5000/review',{
              method : 'GET',
              headers :{
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res=>{
              console.log('res,', res)
              return res.json()
              
            })
            .then(data=> {
                console.log(data)
              setReview(data);
            
            }); 
        }
    },[user])
    return (
        <section className='my-28'>
           <div className='flex justify-between'>
        <div>
        <h4 className="text-xl text-primary font-bold">Customer Review</h4>
        <h2 className='text-3xl'>What our Patients say</h2>
        </div>
        <div>
            
        </div>
           </div>
           <div className='grid grid-cols-1 md : grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                  cReviews.map(cReview =><Review 
                  key={cReview._id}
                   cReview ={cReview}
                  ></Review>)
              } 
               </div> 
        </section>
    );
};

export default CustomerReview;