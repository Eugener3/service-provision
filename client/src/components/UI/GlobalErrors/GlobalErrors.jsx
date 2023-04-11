import React, { useState } from 'react'
import { AiFillAlert } from 'react-icons/ai';

import Error from './Sampling/Error';
import Confirm from './Sampling/Confirm';
import Message from './Sampling/Message';

import styles from './GlobalErrors.module.scss'

export const GlobalErrors = (message) => {
    const [errorMess, setErrorMess] = useState = "";

    switch (message) {
        case 'error':
            return <Error message/>
            break;
        case 'confirm':
            return <Confirm message/>
            break;
        case 'message':
            return <Message message/>
            break;
    }

}
export default GlobalErrors