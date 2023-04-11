import React, { useState } from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"

import Home from "./components/body/Home/Home"

import CreateOrder from "./components/body/Order/CreateOrder";


function App() {
  

  return (

    <Routes>
      <Route path="/order" element={<CreateOrder/>} />
      <Route exact path="/" element={<Home/>} />
    </Routes>

  )
}

export default App
