// eslint-disable-next-line
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import RunnerList from './components/RunnerList';
function App(){
  return (
    <div className='container'>
     <Navbar/>
     <RunnerList/>           
    </div>
  );
}
export default App;
