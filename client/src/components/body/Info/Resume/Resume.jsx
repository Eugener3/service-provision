import React, { useState} from "react";

import styles from "./Resume.module.scss";

import "../../../../App.css";

import profileDefault from "../../../../img/photos/profile-default.jpg";

export const Resume = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    console.log(selectedFile);
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSelectedFile(null)
  }

  // onSubmit={handleSubmit}
  return (
    <>
      <p className={styles.addMore}>Заполните свои данные</p>
      <form action="" onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.inputsWrapper}>
          
            <div className={styles.form}>
            <input type="text" placeholder="ФИО" />
            <input type="text" placeholder="Телефон" />
            <input type="text" placeholder="E-mail" />
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="О себе"
            ></textarea>
            </div>
          
        </div>
        <div>
          <img
            className={styles.Avatar}
            src={profileDefault}
            alt="profileDefault"
          />
          <div class="input__wrapper">
            
              <input type="file" onChange={handleFileChange} name="file" id="file" class="input__file" />
            
            {selectedFile &&  <img src={selectedFile} alt="" style={{ width: "300px" }} /> }
            <label for="file" class="input__file-button">
              <span class="input__file-icon-wrapper">
                <img
                  class="input__file-icon"
                  src={require("../../../../img/photos/icons-download.png")}
                  alt="Выбрать файл"
                  width="25"
                  height="25"
                />
              </span>
              <span class="input__file-button-text">Выберите файл</span>
            </label>
          </div>
          <button>Сохранить</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default Resume;
