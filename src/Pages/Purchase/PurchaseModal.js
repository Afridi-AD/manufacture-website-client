import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const PurchaseModal = ({deleteModal,setDeleteModal,refetch}) => {
  const { _id,name,} =deleteModal;
  const [user] = useAuthState(auth);

  const handleOrder = event =>{
    event.preventDefault()
    const name = event.target.name. value;
   const orders = {
      orderId : _id,
      order : name,
      email : user.email,
      customerName : user.displayName,
      quantity : event.target.quantity.value,
      phone : event.target.phone.value,
      address : event.target.address.value
    }
    fetch('http://localhost:5000/order',{
      method : 'POST',
      headers :{
        'content-type' : 'application/json'

      },
      body : JSON.stringify(orders)
    })
    .then(res=> res.json())
    .then(data =>{
      
        toast(`Order is set ,${name}`)
      
      refetch();
      setDeleteModal(null);
    })
   
  }
    return (
        <div>
           <input type="checkbox" id="purchase-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">You Can Order here !!</h3>
    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <input type="text" name= "name" value={name}  class="input input-bordered w-full max-w-xs" disabled />
    <input type="text" name= "name" value={user?.displayName || ''}  class="input input-bordered w-full max-w-xs" disabled  />
    <input type="email" name='email' value={user?.email || ''} placeholder="Email" class="input input-bordered w-full max-w-xs" disabled  />
    <input type="number" name='quantity' placeholder="Order Quantity" class="input input-bordered w-full max-w-xs" required />
    <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs" required />
    <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" required />
    
    <input type="submit" value="Place Order" class="btn btn-secondary w-full max-w-xs" />
    </form>
    
  </div>
</div> 
        </div>
    );
};

export default PurchaseModal;