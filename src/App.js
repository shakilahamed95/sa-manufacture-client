
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './Shared/NotFound';
import Purshes from './Purshes/Purchases';
import Login from './Login/Login';
import SignUp from './Shared/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllAvailableTools from './AllTools/AllAvailableTools';
import RequireAuth from './Shared/RequireAuth';
import Dashboard from './Dashboard/Dashboard';
import MyOrder from './Dashboard/MyOrder';
import UserReview from './Dashboard/UserReview';
import MyProfile from './Dashboard/MyProfile';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Users from './Dashboard/Users';
import RequireAdmin from './Shared/RequireAdmin';
import ManageOrders from './Dashboard/ManageOrders';
import ManageProducts from './Dashboard/ManageProducts';
import AddProduct from './Dashboard/AddProduct';
import RequireUser from './Shared/RequireUser';



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purshes></Purshes>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={
            <RequireUser><UserReview></UserReview></RequireUser>
          }></Route>
          <Route path='myorder' element={
            <RequireUser><MyOrder></MyOrder></RequireUser>
          }></Route>
          <Route path='makeadmin' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}>
          </Route>
          <Route path='manageorders' element={<RequireAdmin>
            <ManageOrders></ManageOrders>
          </RequireAdmin>}>
          </Route>
          <Route path='manageproduct' element={<RequireAdmin>
            <ManageProducts></ManageProducts>
          </RequireAdmin>}>
          </Route>
          <Route path='addproduct' element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}>
          </Route>
        </Route>
        <Route path='/purchase/' element={<AllAvailableTools></AllAvailableTools>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
