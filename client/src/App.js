import React, { useState } from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"

import Home from "./components/body/Home/Home"

import CreateQuery from "./components/body/Query/CreateQuery";

function App() {
  
  return (
    <Routes>
      <Route path="/query" element={<CreateQuery/>} />
      <Route exact path="/" element={<Home/>} />
    </Routes>
  )
}

export default App
