import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ApiTest } from './pages/Test';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/test' element={<ApiTest/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App; 
