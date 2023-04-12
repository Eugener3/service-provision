import React, { useEffect } from "react"
import axios from "axios"

import styles from "./Query.module.scss"

export const Query = () => {

  // const handleSubmited = async data => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/api/auth/login",
  //       data
  //     )
  //     console.log(response.data)
  //     localStorage.setItem("token", response.data)
  //     props.onCloseModal()
  //   } catch (error) {
  //     console.log(error.message)
  //   }

  //   reset()
  // }

  return (
    <div className={styles.wrapper}>

      <p className={styles.yourQuery}>Ваши заказы:</p>

      <div className={styles.queryesWrapp}>
        <div>
          <span> Заголовок:</span> <p>Example</p>
        </div>
        <div>
          <span> Описание: </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div>
          <span>Место:</span> <p>ExampleExampleExample</p>
        </div>

        <div>
          <span> Дата завершения:</span> <p>12.04.2023</p>
        </div>

        <div>
          <span> Цена:</span> <p>от 2900 до 5700</p>
        </div>

        <div>
          <span> Категория: </span> <p>Example</p>
        </div>
      </div>
    </div>
  )
}

export default Query
