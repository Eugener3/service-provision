import React from 'react'
import styles from './ErrorAlert.module.scss'
import { AiFillAlert } from 'react-icons/ai';

const ErrorAlert = (props) => {
  return (
    <div>
      <div>
        <div className={styles.oops}> <AiFillAlert color="#f17732"size="30px"/> Упс, что то пошло не так</div>
      <div className={styles.errorText}>{props.children}</div>
      </div>
    </div>
  )
}

export default ErrorAlert
