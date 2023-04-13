import React from "react";

import { Link } from "react-router-dom"

import styles from "./FindExpert.module.scss";
import { BiHome } from "react-icons/bi"


import MainHeader from "../../header/MainHeader";
export const FindExpert = () => {
  return (
    <div className={styles.mainWrapper}>
      <MainHeader />
      
      <div className={styles.findExpertWrapp}>
        <div className={styles.title}>
          <h6>Найти специалиста</h6>
          <Link to="/">
            <div className={styles.btnHome} style={{marginTop: "30px"}}>
              <BiHome className={styles.BiHomeIcon} />
              <p>Home</p>
            </div>
          </Link>
        </div>

        <div className={styles.wrapperExperts} style={{marginTop: "20px"}}>
       
          <div className={styles.ExpertsWrapp}>
            <div>
              <span> ФИО:</span> <p></p>
            </div>
            <div>
              <span> Телефон: </span>
              <p> </p>
            </div>

            <div>
              <span>E-mail:</span> <p></p>
            </div>

            <div>
              <span> Описание:</span> <p></p>
            </div>
            <button className={styles.button}>Связаться</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FindExpert;
