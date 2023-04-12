import React from 'react'

import styles from './Sampling.module.scss'

import { AiFillAlert } from 'react-icons/ai';


export const Confirm = (message) => {
  return (
    <div>
        <div className={styles.oops}> <AiFillAlert color="#f17732"size="30px"/> Всё отлично!</div>
        <div className={styles.errorText}>{message}</div>
    </div>
  )
}
export default Confirm