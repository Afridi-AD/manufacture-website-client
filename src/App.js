
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Purchase/Dashboard/Dashboard';
import MyDashboard from './Pages/Purchase/Dashboard/MyDashboard';
import Myorders from './Pages/Purchase/Dashboard/Myorders';
import Myprofile from './Pages/Purchase/Dashboard/Myprofile';
import MyReview from './Pages/Purchase/Dashboard/MyReview';
import Purchase from './Pages/Purchase/Purchase';
import Navber from './Pages/Shared/Navber';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import Users from './Pages/Purchase/Dashboard/Users';
import About from './Pages/Home/About/About';


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
       <Route path='/appointment' element={
          <RequireAuth>
            <MyDashboard></MyDashboard>
          </RequireAuth>}></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
            <Route index element= {<Myprofile></Myprofile>}></Route>
            <Route path='review' element= {<MyReview></MyReview>}></Route>
            <Route path='myOrder' element= {<Myorders></Myorders>}></Route>
            <Route path='user' element= {<Users></Users>}></Route>
          </Route>
          <Route path='/blog' element ={<Blog></Blog>}></Route>
          <Route path='/about' element ={<About></About>}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
