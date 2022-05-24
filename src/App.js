
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Navber from './Pages/Shared/Navber';

function App() {
  return (
    <div className="App">
     <Navber></Navber>
     <Routes>
       <Route path='/' element ={<Home></Home>}></Route>
       <Route path='/login' element ={<Login></Login>}></Route>
       <Route path='/register' element ={<SignUp></SignUp>}></Route>
       <Route path='/purchase' element={
         <RequireAuth>
           <Purchase></Purchase>
         </RequireAuth>
       }></Route>
     </Routes>
    </div>
  );
}

export default App;
