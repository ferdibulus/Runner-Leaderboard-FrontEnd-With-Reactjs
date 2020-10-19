// eslint-disable-next-line
import React, { Component } from 'react';
import Navbar1  from './components/Navbar1';
import RunnerList from './components/RunnerList';
function App(){
  return (
    <div className='container'>
     <Navbar1/>
     <RunnerList/>           
    </div>
  );
}
export default App;
