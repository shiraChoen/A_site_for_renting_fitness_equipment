import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import  NavBar  from './features/User/NavBar';
import Routing from './compenent/Routing';
import UncontrolledExample from './features/User/Home1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './app/store';
import { getUsers } from './features/User/UserSlice';
import ViewManager from './compenent/ViewManager';
import AddCategory from './features/Category/AddCategory';
import TextButtons from './compenent/ViewManager';

function App() {
//   const dispatch:AppDispatch=useDispatch();
// useEffect(()=>{
// dispatch(getUsers());
// },[])
  return (
    <div className="App">
     {/* < TextButtons></TextButtons> */}
      {/* <ViewManager></ViewManager> */}
      {/* <AddCategory></AddCategory> */}
      <NavBar></NavBar>
      <Routing></Routing>
      {/* <UncontrolledExample></UncontrolledExample> */}
    </div>
  );
}

export default App;
