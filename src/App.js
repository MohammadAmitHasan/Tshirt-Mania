import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='orderoverview' element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
