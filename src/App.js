import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './nav';
import Home from './home'; 
import Product from './product'; 
import Payment from './payment';

function App() {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path='/payment/*' element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;