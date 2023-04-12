import React, { useState, useEffect } from "react";
import styles from "./Info.module.scss";
import jwtDecode from "jwt-decode"
import MainHeader from "../../header/MainHeader";

import Profile from "./Profile/Profile";
import Query from "./Query/Query";
import Resume from "./Resume/Resume";

const Info = () => {
  const [selectedButton, setSelectedButton] = useState("profile");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  let logUser
  let jwt = localStorage.getItem("token")
  if (jwt) {  logUser = jwtDecode(jwt)}

  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <div className={styles.infoWrapp}>
        <div className={styles.infoRow}>
          <div className={styles.itemsWrapp}>
            <button
              onClick={() => handleButtonClick("profile")}
              className={`${styles.btnProfile} ${
                selectedButton === "profile" ? styles.active : ""
              }`} > Профиль </button>

            <button
              onClick={() => handleButtonClick("query")}
              className={`${styles.btnQuery} ${
                selectedButton === "query" ? styles.active : ""
              }`} > Мои заказы </button>

            <button
              onClick={() => handleButtonClick("resume")}
              className={`${styles.btnResume} ${
                selectedButton === "resume" ? styles.active : ""
              }`} > Резюме </button>
          </div>
          {selectedButton === "profile" && <Profile profile={logUser}/>}
          {selectedButton === "query" && <Query profile={logUser}/>}
          {selectedButton === "resume" && <Resume />}
        </div>
      </div>
    </div>
  );
};

export default Info;