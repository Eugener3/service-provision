import React from "react";
import axios from "axios";

import styles from "./ModalAuth.module.scss";

import { BsXLg } from "react-icons/bs";

export const ModalWindow = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3001/api/auth/login",
        data: {
          // login: login,
          // password: password,
        },
      });
      localStorage.setItem("token", data);
      props.onCloseModal();
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalWindow}>
        <div className={styles.enterWrapper}>
          <p>Вход</p>
          <BsXLg style={{ cursor: "pointer" }} onClick={props.onCloseModal} />
        </div>

        <form onSubmit={handleSubmit} className={styles.btnsAuth}>
          <input
            name="login"
            type="text"
            placeholder="Логин"
          />
          <input
            name="password"
            type="password"
            placeholder="Пароль"
          />
          <button>Войти</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
