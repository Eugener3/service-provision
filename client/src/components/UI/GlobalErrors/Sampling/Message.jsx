import React from "react";

import styles from "./Sampling.module.scss";

import { AiFillAlert } from 'react-icons/ai';

export const Message = (message) => {
  return (
    <div>
        <div className={styles.oops}> <AiFillAlert color="#f17732"size="30px"/> Уведомление!</div>
        <div className={styles.errorText}>{message}</div>
    </div>
  );
};
export default Message;
