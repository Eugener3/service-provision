import React from 'react'

import Error from './Sampling/Error';
import Confirm from './Sampling/Confirm';
import Message from './Sampling/Message';

import styles from './GlobalErrors.module.scss'

export const GlobalErrors = (type, message) => {
    switch (type) {
        case 'error':
            return console.log('ОШИБКА') //<Error message={message}/>
            
        case 'confirm':
            return  console.log('КАЙФ')//<Confirm message={message}/>
        case 'message':
            return console.log('не ЗНАЕТ') //<Message message={message}/>
    }

}
export default GlobalErrors