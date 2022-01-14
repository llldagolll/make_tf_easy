import React from 'react';
import './App.css';
import { Home } from './templates/Home';

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
  );
}

export default App; 
