import React, { useEffect, useState } from "react"
import axios from "axios"
import styles from "./Modal.module.scss"

import { BsXLg } from "react-icons/bs"

export const ModalWindow = props => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  const [emailDirty, setEmailDirty] = useState(false) //При активации input значение - true
  const [passwordDirty, setPasswordDirty] = useState(false) //При активации input значение - true

  const [emailError, setEmailError] = useState("Поле email не заполнено!")
  const [passwordError, setPasswordError] = useState(
    "Поле password не заполнено!"
  )

  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    //Если какой-то элемент из массива изменяется, то функция из первого параметра будет вызываться
    if (emailError || passwordError) {
      //Если какая-то из ошибок не пуста
      setFormValid(false) //Форма не валидна
    } else {
      setFormValid(true) //Форма валидна
    }
  }, [emailError, passwordError]) //Первый параметр - функция; Второй - массив зависимостей

  const blurHandler = e => {
    //Срабатывает тогда, когда пользователь убрал курсор из поля
    switch (e.target.name) {
      case "email": //Если состояние == 'email', то для EmailDirty делаем true
        setEmailDirty(true)
        break
      case "password": //Если состояние == 'password', то для passwordDirty делаем true
        setPasswordDirty(true)
        break
    }
  }

  const emailHandler = e => {
    setEmail(e.target.value) //Когда пользователь что-то вводит, состояние email меняется на то, которое вводит пользователь в

    // eslint-disable-next-line
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неккоректный email")
    } else {
      setEmailError("")
    }
  }

  const passwordHadler = e => {
    setpassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 18) {
      setPasswordError("Пароль должен быть длинее 3 и меньше 18")
      if (!e.target.value) {
        //Если пароль пустой
        setPasswordError("Поле password не заполнено!")
      }
    } else {
      setPasswordError("")
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3001/api/auth/login",
        data: {
          email: email,
          password: password,
        },
      })
      localStorage.setItem("token", data)
      props.onCloseModal()

    } catch (e) {
      let error = e.response.data.message
      console.log(error)
    }
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalWindow}>
        <div className={styles.enterWrapper}>
          <p>Вход</p>
          <BsXLg style={{ cursor: "pointer" }} onClick={props.onCloseModal} />
        </div>

        <form onSubmit={handleSubmit} className={styles.btnsAuth} method='POST'>
          {emailDirty && emailError && (
            <div className={styles.errors}>{emailError}</div>
          )}

          <input
            value={email}
            onChange={e => emailHandler(e)}
            onBlur={e => blurHandler(e)}
            name='email'
            type='text'
            placeholder='Email...'
          />
          {passwordDirty && passwordError && (
            <div className={styles.errors}>{passwordError}</div>
          )}

          <input
            value={password}
            onChange={e => passwordHadler(e)}
            onBlur={e => blurHandler(e)}
            name='password'
            type='password'
            placeholder='Пароль...'
          />
          <button disabled={!formValid}>Войти</button>
          {/*Если форма не валидна, то кнопка не доступна */}
        </form>
        <div className={styles.bottomModalItems}>
          <p>
            Ещё нет аккаунта?
            <span> Регистрация</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
