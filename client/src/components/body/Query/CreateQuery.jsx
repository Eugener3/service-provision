import React from "react";
import { Link } from "react-router-dom";

import styles from "./CreateQuery.module.scss";

import MainHeader from "../../header/MainHeader";
import SelectOption from "../../UI/CustomSelected/SelectOption";

import { BiHome } from "react-icons/bi";
import DateInput from "../../UI/CustomDateInput/DateInput";


export const CreateQuery = () => {
  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <div className={styles.createQueryWrap}>
        <div className={styles.title}>
          <h6>Создание заказа</h6>
          <Link to="/">
            <div className={styles.button}>
              <BiHome className={styles.BiHomeIcon} />
              <p>Home</p>
            </div>
          </Link>
        </div>

        <div className={styles.row}>
          <form action="#">
              <input className={styles.firstInput} type="text" placeholder="Заголовок заказа" />
              <input type="text" placeholder="Описание"/>

              <DateInput/>

              <p>Желаемая цена:</p>
              <div className={styles.priseInputs}>
                <input type="text" placeholder="От:"/>
                <input className={styles.lastInput} type="text" placeholder="До:"/>
              </div>
              <SelectOption/>
             
          </form>
        </div>

      </div>
    </div>
  );
};
export default CreateQuery;
