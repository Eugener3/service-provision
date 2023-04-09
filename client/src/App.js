import React, { useState } from 'react'
import './App.css';

import MainHeader from './components/header/MainHeader';
import ModalWindow from './components/modal/ModalWindow';



function App() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='wrapper'>
      <MainHeader onClickModal={() => setModalOpened(true)}/>
      {modalOpened && <ModalWindow onCloseModal={() => setModalOpened(false)}/>}
      
    </div>
  );
}

export default App;
