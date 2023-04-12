import React, { useState } from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"

import Home from "./components/body/Home/Home"

import CreateQuery from "./components/body/Query/CreateQuery";
import Profile from "./components/body/Info/Profile/Profile";
import Info from "./components/body/Info/Info";
import AllQuery from "./components/body/AllQuery/AllQuery";

function App() {
  
  return (
    <Routes>
      <Route path="/info" element={<Info/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/query" element={<CreateQuery/>}/>
      <Route path="/allQuery" element={<AllQuery/>}/>
      <Route exact path="/" element={<Home/>} />  
    </Routes>
  )
}

export default App
