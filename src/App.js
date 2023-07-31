
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar';
import Product from './Components/Products/Product';
import Single from './Components/SingleProduct/Single';
import SpecificCategory from './Components/SpecificCategory/SpecificCategory';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ErrorPage from './Components/ErrorPage/ErrorPage';


function App() {
  const [CartItems, setCartItems] = useState([])

  const addtocart=(items)=>{
    setCartItems([...CartItems,items]);
    alert('product added to cart')
    

  }
  const Removefromcart=(removeitem)=>{
    setCartItems(CartItems.filter((item)=>item.id!==removeitem.id));
    alert('product is removed from cart')
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
   
    <Route path='/' element={<Home/>}/>
    <Route path='/single/:id' element={<Single addtocart={addtocart}/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path="/SpecificCategory/:names" element={<SpecificCategory />} />
    <Route path="/SpecificCategory/:names/:id" element={<Single addtocart={addtocart} />} />
    <Route path="/product/:names/:id" element={<Single addtocart={addtocart} />} />
    <Route path='/cart' element={<Cart CartItems={CartItems} Removefromcart={Removefromcart}/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
