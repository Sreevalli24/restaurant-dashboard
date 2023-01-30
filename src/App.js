import React , { useState , useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";
import ViewItem from './components/ViewItem';
import Home from './components/Home';
import EditItem from './components/EditItem';

const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/additem" element = {<AddItem />} />
        <Route exact path="/edititem/:itemId" element = {<EditItem />} />
        <Route exact path="/viewitem/:itemId" element = {<ViewItem />} />
      </Routes>
    </Router>

  );
}
export default App;
