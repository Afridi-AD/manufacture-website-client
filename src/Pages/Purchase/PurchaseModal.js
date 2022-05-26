import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const PurchaseModal = ({order,setOrder}) => {
  const { _id,name,} =order;
  const {user,loading, error} = useAuthState(auth);

  const handleOrder = event =>{
    event.preventDefault()
    const name = event.target.name. value;
   const orders = {
      orderId : _id,
      order : name,
      name : user.email,
      customerName : user.displayName,
      phone : event.target.phone.value
    }
    fetch('http://localhost:5000/',{
      method : 'POST',
      headers :{
        'content-type' : 'application/json'

      },
      body : JSON.stringify(orders)
    })
    .then(res=> res.json())
    .then(data =>{
      if(data.success){
        toast(`Order is set ,${name}`)
      }
      else{
        toast(`You already have an order ,${name}`)
      }
    setOrder(null);
    })
   
  }
    return (
        <div>
           <input type="checkbox" id="purchase-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <input type="text" name= "name" value={user?.displayName || ''} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' value={user?.email || ''} placeholder="Email" class="input input-bordered w-full max-w-xs" />
    <input type="text" name='phone' placeholder="phone number" class="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
    </form>
    
  </div>
</div> 
        </div>
    );
};

export default PurchaseModal;