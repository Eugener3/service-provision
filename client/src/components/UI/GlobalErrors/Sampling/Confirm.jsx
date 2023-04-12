import { useState, useEffect } from "react";
import { AiFillAlert } from "react-icons/ai";
import styles from "./Sampling.module.scss";

const Confirm = ({ message }) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);

    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showAlert && (
        <div key={new Date().getTime()} className={styles.wrapperAlert}>
            <div className={styles.oops}>
            <AiFillAlert color="#f17732" size="30px" /> Всё отлично!
            </div>
        <div className={styles.errorText}>{message}</div>
      </div>
    )
  );
};

export default Confirm;


