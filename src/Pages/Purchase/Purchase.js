import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import BuyProduct from './BuyProduct';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    
    const [deleteModal,setDeleteModal] =useState(null);
  
    const {data :buys,isLoading,refetch} = useQuery('product', ()=>fetch('http://localhost:5000/products')
            .then(res => res.json())
            )
            if(isLoading){
              return <Spinner></Spinner>
            }
 
    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
              buys.map(buy=><BuyProduct
                key={buy._id}
                buy ={buy}
                setDeleteModal ={setDeleteModal}
              ></BuyProduct>)  
            }
            </div>
         { deleteModal && <PurchaseModal 
         deleteModal={deleteModal}
         refetch={refetch}
         setDeleteModal={setDeleteModal}
          ></PurchaseModal>}
        </div>
    );
};

export default Purchase;