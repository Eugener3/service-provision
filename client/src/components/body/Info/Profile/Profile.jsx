import React from "react";
import { Link } from "react-router-dom";

import styles from "./Profile.module.scss";

import MainHeader from "../../../header/MainHeader";

import { HiOutlinePencilAlt } from "react-icons/hi";

export const Profile = () => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.bio}>
        <div>
          <h1>Ваши данные:</h1>
        </div>
        <div>
          <h2>Логин: example</h2>
        </div>
        <div>
          <h3>Электронная почта: example@mail.ru</h3>
          <HiOutlinePencilAlt />
        </div>
      </div>

      <div className={styles.addBIO}>
        <p>Дополните информацию о себе:</p>
        <div>
          <input type="text" placeholder="ФИО" color="white" />
          <input type="text" placeholder="Телефон" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="О себе"
        ></textarea>
      </div>
    </div>
  );
};
export default Profile;
