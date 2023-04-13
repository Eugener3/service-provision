import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";

import styles from "./Profile.module.scss";

import GlobalErrors from "../../../UI/GlobalErrors/GlobalErrors";
import { HiOutlinePencilAlt } from "react-icons/hi";

export const Profile = (props) => {
  const [showAlert2, setShowAlert2] = useState({});

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" });

  let jwt = localStorage.getItem("token");
  const headers = { Authorization: jwt };

  const handleSubmited = async (data) => {
    try {
      await axios.patch(
        `http://localhost:3001/api/user/${props.profile.idUser}`,
        data,
        { headers }
      );
      console.log("Данные успешно отправлены!");
      setShowAlert2({
        active: true,
        message: "Данные успешно отправлены!",
        type: "confirm",
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
    reset();
  };
  return (
    <>
      <div>
        <GlobalErrors object={showAlert2} />
      </div>
      <div className={styles.profileWrapper}>
        <div className={styles.bio}>
          <div className={styles.yourData}>
            <h1>Ваши данные:</h1>
            <HiOutlinePencilAlt size={"1.5em"} />
          </div>
          <div>
            <h2>Логин: {props.profile.login}</h2>
          </div>
          <div>
            <h3>Электронная почта: {props.profile.email}</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSubmited)}>
          <div className={styles.addBIO}>
            <p>Дополните информацию о себе:</p>
            <div>
              {errors.FIO && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.FIO.message}
                </p>
              )}
              <input
                type="text"
                placeholder="ФИО"
                color="white"
                {...register("FIO", {
                  required: "Поле обязательно к заполнение",
                })}
              />
              <input
                type="text"
                placeholder="Телефон"
                {...register("telephone", {
                  required: "Поле обязательно к заполнение",
                })}
              />
              {errors.telephone && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.telephone.message}
                </p>
              )}
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="О себе"
                {...register("bio", {
                  required: "Поле обязательно к заполнению",
                })}
              ></textarea>
              {errors.bio && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errors.bio.message}
                </p>
              )}
            </div>
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </>
  );
};
export default Profile;
