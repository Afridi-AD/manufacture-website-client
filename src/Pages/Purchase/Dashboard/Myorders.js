import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myorders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [cOrder, setCOrder] = useState([]);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?order=${user.email}`,{
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
              setCOrder(data);
            
            }); 
        }
    },[user])
    return (
        <div>
        <h2>My Order {cOrder.length}</h2> 
        <div class="overflow-x-auto">
<table class="table w-full">
 
 <thead>
   <tr>
     <th></th>
     <th>Name</th>
     <th>Date</th>
     <th>Time</th>
     <th>Treatment</th>
   </tr>
 </thead>
 <tbody>
   {
       cOrder.map((a , index)=><tr>
         <th>{index +1}</th>
         <td>{a.patientName}</td>
         <td>{a.date}</td>
         <td>{a.slot}</td>
         <td>{a.treatment}</td>
       </tr>)
   }
   
   
   
 </tbody>
</table>
</div>

     </div>
    );
};

export default Myorders;