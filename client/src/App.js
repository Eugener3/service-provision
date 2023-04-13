import React, { useState, useContext} from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ErrorContext } from "./components/UI/GlobalErrors/Sampling/ErrorContext";

import "./App.css"

import Home from "./components/body/Home/Home"

import CreateQuery from "./components/body/Query/CreateQuery";
import Profile from "./components/body/Info/Profile/Profile";
import Info from "./components/body/Info/Info";
import AllQuery from "./components/body/AllQuery/AllQuery";
import FindExpert from "./components/body/FindExpert/FindExpert";

function App() {

  const [showError, setShowError] = useState(false);

  const handleButtonClick = () => {
  setShowError(true);
  };

  return (
    <ErrorContext.Provider value={{showError, setShowError, handleButtonClick}}>    
      <Routes>
        <Route path="/info" element={<Info/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/query" element={<CreateQuery/>}/>
        <Route path="/allQuery" element={<AllQuery/>}/>
        <Route path="/findExpert" element={<FindExpert/>}/>
        <Route path="/servise-provision" element={<Home/>} />
        <Route exact path="/" element={<Home/>} />  
      </Routes>
    </ErrorContext.Provider>

  )
}

export default App
