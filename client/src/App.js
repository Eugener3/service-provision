import React, { useState } from 'react'
import './App.css';
import jwtDecode from 'jwt-decode'

import MainHeader from './components/header/MainHeader';
import ModalWindow from './components/modal/ModalWindow';


let logUser

if (localStorage.token) {
  let jwt = localStorage.getItem('token')
  logUser = jwtDecode(jwt)
  console.log(logUser)
}

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  let [user, setUser] = useState(logUser);


  
  console.log(user)

  return (
    <div className='wrapper'>
      <MainHeader user={logUser} onClickModal={() => setModalOpened(true)}/>
      {modalOpened && <ModalWindow onCloseModal={() => setModalOpened(false)}/>}
      
    </div>
  );
}

export default App;
