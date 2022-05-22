
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './Shared/NotFound';
import Purshes from './Purshes/Purchases';
import Login from './Login/Login';
import SignUp from './Shared/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<Purshes></Purshes>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
