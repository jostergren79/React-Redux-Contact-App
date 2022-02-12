import React from 'react'
import { ToastContainer } from 'react-toastify';

import './App.css';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { AddContact } from './components/AddContact'
import EditContact from './components/EditContact'



const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      
    <Routes>
        <Route exact path='/' element={ <Home /> }></Route>
        <Route exact path='/add' element={<AddContact />}></Route>
        <Route exact path='/edit/:id' element={<EditContact />}></Route>
     </Routes>

    </div>
  );
}

export default App;
