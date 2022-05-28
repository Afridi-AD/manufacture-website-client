import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Footer from './Footer';
import Products from './Products';
import Review from './Review';

const Home = () => {
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
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            {/* <Review></Review> */}
            <Products></Products>
            <div className='mb-3 mt-3'>
            <div className='grid grid-cols-1 md : grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                  cReviews.map(cReview =><Review 
                  key={cReview._id}
                   cReview ={cReview}
                  ></Review>)
              } 
               </div> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;