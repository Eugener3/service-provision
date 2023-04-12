import { React, useState } from "react"
import axios from "axios"
import styles from "./ModalReg.module.scss"
import { BsXLg } from "react-icons/bs"
import { useForm } from "react-hook-form"
export const ModalWindowReg = props => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" })

  const [regDetails, setRegDetails] = useState()

  const handleSubmited = async data => {
    setRegDetails(data)
    try {
      await axios
        .post("http://localhost:3001/api/auth/register/", regDetails)
        .then(res => {
          console.log(res.data.message)
        })
        .then(() => props.onCloseModal())
    } catch (error) {
      console.log(error.response.data.message)
    }

    reset()
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalWindow}>
        <div className={styles.enterWrapper}>
          <p>Регистрация</p>
          <BsXLg style={{ cursor: "pointer" }} onClick={props.onCloseModal} />
        </div>

        <form
          className={styles.btnsAuth}
          onSubmit={handleSubmit(handleSubmited)}
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

          <button disabled={!isValid}>Создать аккаунт</button>
        </form>
      </div>
    </div>
  )
}
export default ModalWindowReg
