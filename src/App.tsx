import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"
import { Vpc } from './pages/Vpc';
import { MakeTerraformFile } from './pages/TerraformFile';
import { Home } from './components/templates/Home';

const keyNameList = [
  "vpcCidrBlock",
  "vpcName",
  "AvailabilityZone",
  "subnetCidrBlock",
  "publicIpAddressOnLaunch",
]


function App() {
  return (
    <Home />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={ <Vpc /> } />
    //     <Route path="/make" element={ <MakeTerraformFile keyName='vpcName' /> } />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App; 
