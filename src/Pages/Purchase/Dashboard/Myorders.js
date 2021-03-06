import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myorders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [cOrder, setCOrder] = useState([]);
    useEffect(()=>{
        if(user){
            fetch('https://infinite-island-55718.herokuapp.com/order',{
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
        <h2 className='mb-2'>My Orders</h2> 
        <div class="overflow-x-auto">
<table class="table w-full">
 
 <thead>
   <tr>
     <th>sl</th>
     <th>Name</th>
     <th>Email</th>
     <th>Address</th>
     <th>Quantity</th>
     <th>Phone</th>
   </tr>
 </thead>
 <tbody>
   {
       cOrder.map((a , index)=><tr>
         <th>{index +1}</th>
         
         <td>{a.customerName}</td>
         <td>{a.email}</td>
         <td>{a.address}</td>
         <td>{a.quantity}</td>
         <td>{a.phone}</td>
       </tr>)
   }
   
   
   
 </tbody>
</table>
</div>

     </div>
    );
};

export default Myorders;