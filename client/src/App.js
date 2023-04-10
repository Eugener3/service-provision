import React, { useState } from "react"
import "./App.css"
import jwtDecode from "jwt-decode"
import logout from "./components/functions/logout"

import MainHeader from "./components/header/MainHeader"
import ModalWindow from "./components/modal/ModalWindow"
import CTAblock from "./components/body/CTAblock/CTAblock"

let logUser
if (localStorage.token) {
  let jwt = localStorage.getItem("token")
  logUser = jwtDecode(jwt)
}

function App() {
  const [modalOpened, setModalOpened] = useState(false)
  let auth = localStorage.getItem("token")
  return (
    <div className='wrapper'>
      <MainHeader auth={auth} onClickModal={() => setModalOpened(true)} />
      {modalOpened && (
        <ModalWindow onCloseModal={() => setModalOpened(false)} />
      )}
      <CTAblock />
    </div>
  )
}

export default App
