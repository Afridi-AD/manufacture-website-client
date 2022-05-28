import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user,refetch }) => {
    const { email,role } = user;
    console.log(user);
    const makeAdmin = () => {
        fetch(`https://infinite-island-55718.herokuapp.com/user/admin/${email}`,{
            method : 'PUT',
            headers :{
               authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> {
            if(res.status ===403){
                toast.error('Failed to make an admin');
            }
           return res.json()})
        .then(data=>{
            if(data.modifiedCount >0){
                refetch();           
            toast.success('Successfully made an admin')
            }
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !=='admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Delete user</button></td>
        </tr>
    );
};

export default UserRow;