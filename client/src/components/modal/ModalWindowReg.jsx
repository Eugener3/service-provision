import { React, useState } from "react";
import axios from "axios";
import styles from "./ModalReg.module.scss";
import ErrorAlert from "../UI/ErrorAlert/ErrorAlert";
import { BsXLg } from "react-icons/bs";
import SuccesAlert from "../UI/SuccesAlert/SuccesAlert";

export const ModalWindowReg = (props) => {
  let [errorAlert, setErrorAlert] = useState();
  let [succesAlert, setSuccesAlert] = useState();

  const [userDetails, setUserDetails] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios
        .post("http://localhost:3001/api/auth/register", userDetails)
        .then((res) => {
          setSuccesAlert(res.data.message);
          props.onCloseModal()
        })


    } catch (error) {
      setErrorAlert(error.response.data.message);
    }
  };

  return (
    <div className={styles.modalWrapper}>
      {errorAlert && (
        <div className={styles.errorAlert}>
          <ErrorAlert>{errorAlert}</ErrorAlert>
        </div>
      )}
      {succesAlert && (
        <div className={styles.errorAlert}>
          <SuccesAlert>{succesAlert}</SuccesAlert>
        </div>
      )}
      <div className={styles.modalWindow}>
        <div className={styles.enterWrapper}>
          <p>Регистрация</p>
          <BsXLg style={{ cursor: "pointer" }} onClick={props.onCloseModal} />
        </div>

        <form className={styles.btnsAuth} onSubmit={handleSubmit}>
          <input
            type="text"
            name="login"
            placeholder="Login"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Зарегаца</button>
        </form>
      </div>
    </div>
  );
};
export default ModalWindowReg;
