import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Allbook from './component/Bookstore/Allbook';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Createbook from './component/Bookstore/Createbook';
import Booklist from './component/Bookstore/Booklist';
import Updatebook from './component/Bookstore/Updatebook';
import Deletebook from './component/Bookstore/Deletebook';
import Login from './component/Authentication/Login';
import Register from './component/Authentication/Register';
import Protectroutes from './ProtectRouter/Protectroutes';




const App = () => {


  const isUserLogedIn=!!localStorage.getItem("tokens");




  return (
    
    <>


    <BrowserRouter>
    <Navbar/>
    
    <Routes>


      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/shop' element={<Shop/>} />


      {
        isUserLogedIn && <>
      
      <Route path='/createbook' element={<Createbook/>} />
      <Route path='/allbook' element={<Allbook/>} />
      <Route path='/booklist' element={<Booklist/>} />
      <Route path='/updatebook/:id' element={<Updatebook/>} />
      <Route path='/deletebook/:id' element={<Deletebook/>} />
      </>
        

}
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    
    </BrowserRouter>






  
    </>


  )
}

export default App;