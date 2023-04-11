import React from 'react'
import styles from './Sampling.module.scss'

export const Confirm = () => {
  return (
    <div>
        <div className={styles.oops}> <AiFillAlert color="#f17732"size="30px"/> Упс, что то пошло не так</div>
        <div className={styles.errorText}>{errorMess}</div>
    </div>
  )
}
export default Confirm