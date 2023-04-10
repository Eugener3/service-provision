import React from 'react'
import styles from './SuccesAlert.module.scss'
import { BsFire } from 'react-icons/bs';

const SuccesAlert = (props) => {
  return (
    <div>
      <div>
        <div className={styles.oops}> <BsFire color="#f17732"size="30px"/> Всё отлично!</div>
      <div className={styles.errorText}>{props.children}</div>
      </div>
    </div>
  )
}

export default SuccesAlert
