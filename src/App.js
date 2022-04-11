import { Route, Routes } from 'react-router-dom';
import Error from './components/Error/Error';
import Header from './components/header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/order' element={<Shop/>}></Route>
        <Route path='/order-review' element={<Review/>}></Route>
        <Route path='/manage-inventory' element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
