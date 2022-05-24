import React, { useEffect, useState } from 'react';
import BuyProduct from './BuyProduct';

const Purchase = () => {
    const [buys, setBuy] = useState([])
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
              ></BuyProduct>)  
            }
            </div>
        
        </div>
    );
};

export default Purchase;