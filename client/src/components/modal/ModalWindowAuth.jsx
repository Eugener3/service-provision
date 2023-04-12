import React, { useState } from "react"
import axios from "axios"

import styles from "./ModalAuth.module.scss"
import { useForm } from "react-hook-form"

import { BsXLg } from "react-icons/bs"

export const ModalWindow = props => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" })

  const handleSubmited = async data => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        data
      )
      console.log(response.data)
      localStorage.setItem("token", response.data)
      props.onCloseModal()
    } catch (error) {
      console.log(error.message)
    }

    reset()
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalWindow}>
        <div className={styles.enterWrapper}>
          <p>Вход</p>
          <BsXLg style={{ cursor: "pointer" }} onClick={props.onCloseModal} />
        </div>

        <form
          onSubmit={handleSubmit(handleSubmited)}
          className={styles.btnsAuth}
        >
          <input
            type='text'
            placeholder='Логин'
            {...register("login", {
              required: "Заполните логин",
            })}
          />
          {errors.login && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.login.message}
                </p>
              )}
          <input
            type='password'
            placeholder='Пароль'
            {...register("password", {
              required: "Заполните пароль",
            })}
          />
          {errors.password && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.password.message}
                </p>
              )}
          <button disabled={!isValid}>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default ModalWindow
