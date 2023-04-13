import React, { useState } from "react"
import axios from "axios"
import styles from "./Resume.module.scss"

import "../../../../App.css"

import profileDefault from "../../../../img/photos/profile-default.jpg"

import { useForm } from "react-hook-form"

export const Resume = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" })

  const [selectedFile, setSelectedFile] = useState(null)
  const [imageUrl, setImageUrl] = useState("")
  const [image, setImage] = useState(localStorage.getItem("image"))

  const handleFileChange = event => {
    const selectedFile = event.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      localStorage.setItem("image", reader.result)
      setImage(reader.result)
    }
    reader.readAsDataURL(selectedFile)
  }

  let jwt = localStorage.getItem("token")
  const headers = { Authorization: jwt }

  const [resumeDetails, setResumeDetails] = useState()

  const handleSubmited = async data => { //data - с формы
    try {
      await axios
        .post("https://service-provision.onrender.com/api/resume/newCandidate", data, { //апи, данные, хэдер
          headers,
        })
        .then(res => {
          console.log(res.data.message)
        })
    } catch (error) {
      console.log(error.response.data.message)
      console.log(resumeDetails)
    }
    setSelectedFile(null)
    setImageUrl("")
    reset()
  }

  return (
    <>
      <p className={styles.addMore}>Заполните свои данные</p>
      <form onSubmit={handleSubmit(handleSubmited)}>
        <div className={styles.wrapper}>
          <div className={styles.inputsWrapper}>
            <div className={styles.form}>
              <input
                type='text'
                placeholder='ФИО'
                {...register("FIO", {
                  required: "Поле обязательно к заполнению",
                })}
              />
              {errors.FIO && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.FIO.message}
                </p>
              )}
              <input
                type='text'
                placeholder='Телефон'
                {...register("telephone", {
                  required: "Поле обязательно к заполнению",
                })}
              />
              {errors.telephone && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.telephone.message}
                </p>
              )}
              <input
                type='text'
                placeholder='E-mail'
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                })}
              />
              {errors.email && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.email.message}
                </p>
              )}
              <textarea
                cols='30'
                rows='10'
                placeholder='О себе'
                {...register("description", {
                  required: "Поле обязательно к заполнению",
                })}
              ></textarea>
              {errors.description && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <div>
            {image ? (
              <img className={styles.Avatar} src={image} alt='selectedFile' />
            ) : (
              <img
                className={styles.Avatar}
                src={profileDefault}
                alt='profileDefault'
              />
            )}
            <div class='input__wrapper'>
              <input
                type='file'
                onChange={handleFileChange}
                name='file'
                id='file'
                class='input__file'
              />
              <label for='file' class='input__file-button'>
                <span class='input__file-icon-wrapper'>
                  <img
                    class='input__file-icon'
                    src={require("../../../../img/photos/icons-download.png")}
                    alt='Выбрать файл'
                    width='25'
                    height='25'
                  />
                </span>
                <span class='input__file-button-text'>Выберите файл</span>
              </label>
            </div>
            <button className={styles.btnSave} disabled={!isValid}>Сохранить</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Resume
