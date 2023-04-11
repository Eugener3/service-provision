import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Profile.module.scss";

import MainHeader from "../../../header/MainHeader";

import { HiOutlinePencilAlt } from "react-icons/hi";

export const Profile = (props) => {


  const [userData, setUserData] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const {fetchUser} = await axios.get(`http://localhost:3001/api/user/${props.profile.idUser}`);
  //     setUserData(fetchUser.data);
  //     } catch(error) {
  //       console.log(error.response);
  //     }
      
  //   };

  //   fetchData();
  // }, [props.profile.idUser]);



  const [userDetails, setUserDetails] = useState({
    FIO: "",
    telephone: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios
        .patch(`http://localhost:3001/api/user/${props.profile.idUser}`, userDetails)
        .then((res) => {
          // setSuccesAlert(res.data.message);
          console.log("nicecock");
        });
    } catch (error) {
      // setErrorAlert(error.response.data.message);
      console.log(error.response);
    }
  };

  useEffect(() => {
    console.log(props.profile)
  }, [userDetails])

  return (
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
      <form onSubmit={handleSubmit}>
      <div className={styles.addBIO}>
        <p>Дополните информацию о себе:</p>
        <div>
          
            <input
              type="text"
              placeholder="ФИО"
              color="white"
              name="FIO"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Телефон"
              name="telephone"
              onChange={handleChange}
            />
            <textarea
              name="description"
              onChange={handleChange}
              id=""
              cols="30"
              rows="10"
              placeholder="О себе"
            ></textarea>
          
        </div>
      </div>
      <button type='submit'>Сохранить</button>
      </form>
    </div>
  );
};
export default Profile;
