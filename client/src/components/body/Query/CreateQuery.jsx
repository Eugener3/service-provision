import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextCategory } from "../../../utils/Context/ContextCategory";
import axios from 'axios'

// let [selectedValue, setSelectedValue] = useState()
import styles from "./CreateQuery.module.scss";

import MainHeader from "../../header/MainHeader";
import SelectOption from "../../UI/CustomSelected/SelectOption";

import { BiHome } from "react-icons/bi";
import DateInput from "../../UI/CustomDateInput/DateInput";

const headers = { Authorization: localStorage.getItem('token') };

export const CreateQuery = () => {
  const [queryDetails, setqueryDetails] = useState({
    title: "",
    description: "",
    place: "",
    deadline: "",
    priceOf: "",
    priceAf: "",
    category: "",
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
      const {data} = await axios
            .post("http://localhost:3001/api/query", queryDetails, {headers})
            .then((res) => {
              // setSuccesAlert(res.data.message);
              console.log('nice')
            })
    
    
        } catch (error) {
          // setErrorAlert(error.response.data.message);
          console.error(error)
        }
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setqueryDetails({ ...queryDetails, category: selectedOption });
  }, [selectedOption]);
  useEffect(() => {
    setqueryDetails({ ...queryDetails, deadline: date });
  }, [date]);

  return (
    <ContextCategory.Provider
      value={{ selectedOption, setSelectedOption, date, setDate }}
    >
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

              <input
                type="text"
                name="place"
                placeholder="Место (Город, дом, кв)"
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
    </ContextCategory.Provider>
  );
};
export default CreateQuery;
