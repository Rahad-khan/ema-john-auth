import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
import Header from './components/header/Header';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/order' element={<Shop/>}></Route>
        <Route path='/order-review' element={<Review/>}></Route>
        <Route path='/manage-inventory' element={<Inventory/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
