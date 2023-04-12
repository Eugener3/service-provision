import React, { useState, useContext }  from "react";

import Error from './Sampling/Error';
import Confirm from './Sampling/Confirm';
import Message from './Sampling/Message';

import styles from './GlobalErrors.module.scss'



export const GlobalErrors = ( props ) => {

    switch (props.object.type) {
      case 'error':
        return <Error message={props.object.message}/>;
      case 'confirm':
        return <Confirm message={props.object.message}/>;
      case 'message':
        return<Message message={props.object.message}/>;
      default:
        return null;
    }
  };
export default GlobalErrors