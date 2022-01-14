import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ExampleRedux } from './pages/ExampleRedux';
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"
import { Vpc } from './pages/Vpc';
import { MakeTerraformFile } from './pages/TerraformFile';

const keyNameList = [
  "vpcCidrBlock",
  "vpcName",
  "AvailabilityZone",
  "subnetCidrBlock",
  "publicIpAddressOnLaunch",
]


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/example" element={ <ExampleRedux /> } />
        <Route path="/" element={ <Vpc /> } />
        <Route path="/make" element={ <MakeTerraformFile keyName='vpcName' /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
