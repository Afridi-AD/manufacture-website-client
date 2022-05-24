import React, { useEffect, useState } from 'react';
import BuyProduct from './BuyProduct';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const [buys, setBuy] = useState([]);
    const [order,setOrder] =useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setBuy(data));
    }, [])
    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
              buys.map(buy=><BuyProduct
                key={buy._id}
                buy ={buy}
                SetOrder ={setOrder}
              ></BuyProduct>)  
            }
            </div>
         { order && <PurchaseModal order={order} ></PurchaseModal>}
        </div>
    );
};

export default Purchase;