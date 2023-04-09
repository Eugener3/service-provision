import './App.css';
import React from 'react'

import MainHeader from './components/header/MainHeader';
import ModalWindow from './components/modal/ModalWindow';

function App() {
  return (
    <div className='wrapper'>
      <MainHeader/>
      <ModalWindow/>
    </div>
  );
}

export default App;
