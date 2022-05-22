
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
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<UserReview></UserReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='/purchase/' element={<AllAvailableTools></AllAvailableTools>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
