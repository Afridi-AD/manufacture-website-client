import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <h2 className='text-3xl font-bold text-purple-500'>Dashboard</h2>
          <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard"> My Dashboard</Link></li>
            <li><Link to ="/dashboard/myOrder" >My Orders</Link></li>
            <li><Link to ="/dashboard/review" >My Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;