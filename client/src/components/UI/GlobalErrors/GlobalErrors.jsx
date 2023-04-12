import React from 'react'

import Error from './Sampling/Error';
import Confirm from './Sampling/Confirm';
import Message from './Sampling/Message';

import styles from './GlobalErrors.module.scss'

export const GlobalErrors = ( {type, message} ) => {
    switch (type) {
      case 'error':
        return <Error message={message}/>;
      case 'confirm':
        return <Confirm message={message}/>;
      case 'message':
        return<Message message={message}/>;
      default:
        return null;
    }
  };
export default GlobalErrors