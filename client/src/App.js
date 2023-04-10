import React, { useState } from "react"
import "./App.css"
import jwtDecode from "jwt-decode"
import logout from "./components/functions/logout"

import MainHeader from "./components/header/MainHeader"
import ModalWindow from "./components/modal/ModalWindowAuth"
import ModalWindowReg from "./components/modal/ModalWindowReg"

import CTAblock from "./components/body/CTAblock/CTAblock"
import AboutUS from "./components/body/AboutUS/AboutUS"

let logUser
if (localStorage.token) {
  let jwt = localStorage.getItem("token")
  logUser = jwtDecode(jwt)
}

function App() {
  const [modalOpened, setModalOpened] = useState(false)
  const [openModalReg, setOpenModalReg] = useState(false) 
  
  let auth = localStorage.getItem("token")
  return (
    <div className='wrapper'>
      <MainHeader auth={auth} onClickModal={() => setModalOpened(true)} onClickModalReg={() => setOpenModalReg(true)}/> 
      {modalOpened && (
        <ModalWindow onCloseModal={() => setModalOpened(false)} />
      )}
      {openModalReg && (
        <ModalWindowReg  onCloseModal={() => setOpenModalReg(false)}/>
      )}
      <CTAblock />
      
      
      <AboutUS/>
      <div style={{height:'3000px', backgroundColor: 'green'}}></div>
    </div>
  )
}

export default App
