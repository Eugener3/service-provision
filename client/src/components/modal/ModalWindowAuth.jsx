import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./ModalAuth.module.scss";
import ErrorAlert from "../UI/ErrorAlert/ErrorAlert";

import { BsXLg } from "react-icons/bs";

export const ModalWindow = (props) => {
  let [errorAlert, setErrorAlert] = useState();
  const [login, setLogin] = useState("");

  const [password, setpassword] = useState("");

  const [loginDirty, setLoginDirty] = useState(false); //При активации input значение - true
  const [passwordDirty, setPasswordDirty] = useState(false); //При активации input значение - true

  const [loginError, setLoginError] = useState("Поле login не заполнено!");
  const [passwordError, setPasswordError] = useState(
    "Поле password не заполнено!"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    //Если какой-то элемент из массива изменяется, то функция из первого параметра будет вызываться
    if (loginError || passwordError) {
      //Если какая-то из ошибок не пуста
      setFormValid(false); //Форма не валидна
    } else {
      setFormValid(true); //Форма валидна
    }
  }, [loginError, passwordError]); //Первый параметр - функция; Второй - массив зависимостей

  const blurHandler = (e) => {
    //Срабатывает тогда, когда пользователь убрал курсор из поля
    switch (e.target.name) {
      case "password": //Если состояние == 'password', то для passwordDirty делаем true
        setPasswordDirty(true);
        break;
      case "login": //Если состояние == 'password', то для passwordDirty делаем true
        setLoginDirty(true);
        break;
    }
  };

  const loginHandler = (e) => {
    setLogin(e.target.value);
    if (!e.target.value) {
      //Если пароль пустой
      setLoginError("Поле login не заполнено!");
    } else {
      setLoginError("");
    }
  };

  const passwordHadler = (e) => {
    setpassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 18) {
      setPasswordError("Пароль должен быть длинее 3 и меньше 18");
      if (!e.target.value) {
        //Если пароль пустой
        setPasswordError("Поле password не заполнено!");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3001/api/auth/login",
        data: {
          login: login,
          password: password,
        },
      });
      localStorage.setItem("token", data);
      props.onCloseModal();
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
      <div className={styles.modalWindow}>
        <div className={styles.enterWrapper}>
          <p>Вход</p>
          <BsXLg style={{ cursor: "pointer" }} onClick={props.onCloseModal} />
        </div>

        <form onSubmit={handleSubmit} className={styles.btnsAuth} method="POST">
          {loginDirty && loginError && (
            <div className={styles.errors}>{loginError}</div>
          )}

          <input
            value={login}
            onChange={(e) => loginHandler(e)}
            onBlur={(e) => blurHandler(e)}
            name="login"
            type="text"
            placeholder="Login"
          />
          {passwordDirty && passwordError && (
            <div className={styles.errors}>{passwordError}</div>
          )}

          <input
            value={password}
            onChange={(e) => passwordHadler(e)}
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            placeholder="Пароль..."
          />
          <button disabled={!formValid}>Войти</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
