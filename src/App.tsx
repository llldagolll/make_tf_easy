import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ExampleRedux } from './components/ExampleRedux';
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"
import { Vpc } from './components/Vpc';
import { MakeTerraformFile } from './components/TerraformFile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/example" element={ <ExampleRedux /> } />
        <Route path="/" element={ <Vpc /> } />
        <Route path="/make" element={ <MakeTerraformFile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
