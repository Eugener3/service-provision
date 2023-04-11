import React, { useState } from 'react'

import jwtDecode from "jwt-decode"
// import logout from "../functions/logout"

import CTAblock from "../CTAblock/CTAblock"
import AboutUS from "../AboutUS/AboutUS"

import MainHeader from "../../header/MainHeader"
import ModalWindow from "../../modal/ModalWindowAuth"
import ModalWindowReg from "../../modal/ModalWindowReg"

let logUser
if (localStorage.token) {
  let jwt = localStorage.getItem("token")
  logUser = jwtDecode(jwt)
}

export const Home = () => {

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

export default Home