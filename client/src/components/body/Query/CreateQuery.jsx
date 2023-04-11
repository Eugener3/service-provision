import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";

import styles from "./CreateQuery.module.scss";

import MainHeader from "../../header/MainHeader";
import SelectOption from "../../UI/CustomSelected/SelectOption";

import { BiHome } from "react-icons/bi";
import DateInput from "../../UI/CustomDateInput/DateInput";

export const CreateQuery = () => {
  let Context = createContext();

  const [queryDetails, setqueryDetails] = useState({
    title: "",
    description: "",
    data: "",
    priceOf: "",
    priceAf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setqueryDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(queryDetails);
    } catch (error) {}
  };

  return (
    <Context.Provider>
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
            <form onSubmit={handleSubmit}>
              <input
                className={styles.firstInput}
                type="text"
                name="title"
                placeholder="Заголовок заказа"
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Описание"
                onChange={handleChange}
              />

              <DateInput />
              <p>Желаемая цена:</p>
              <div className={styles.priseInputs}>
                <input
                  type="text"
                  name="priceOf"
                  placeholder="От:"
                  onChange={handleChange}
                />

                <input
                  className={styles.lastInput}
                  name="priceAf"
                  type="text"
                  placeholder="До:"
                  onChange={handleChange}
                />
              </div>
              <SelectOption />
              <div className={styles.btnLogin}>
                <button>Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};
export default CreateQuery;
