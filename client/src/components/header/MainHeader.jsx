import { React, useState } from "react";
import ErrorAlert from "../UI/ErrorAlert/ErrorAlert";

import styles from "./Header.module.scss";

import logo from "../../img/logo.svg";

import { BsSearch, BsCaretRightFill } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { ImExit } from "react-icons/im";

import logout from "../functions/logout";

import ModalWindowReg from "../modal/ModalWindowReg";

export const MainHeader = (props) => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.leftItems}>
          <img src={logo} alt="logo" />
          <p>WorkHero</p>
        </div>

        {props.auth && (
          <div className={styles.headerBtns}>
            <p>Создать заказ</p>
            <p>Найти специалиста</p>
            <p>Мои заказы</p>
            <p>Стать исполнителем</p>
          </div>
        )}

        {!props.auth && (
          <div
            className={styles.headerBtns}
            onClick={!props.auth && props.onClickModalReg}
          >
            <p>Создать заказ</p>
            <p>Найти специалиста</p>
            <p>Мои заказы</p>
            <p>Стать исполнителем</p>
          </div>
        )}

        <div className={styles.rightItems}>
          {!props.auth && (
            <>
              <div className={styles.loginBtn}>
                <button
                  className={styles.btnReg}
                  onClick={props.onClickModalReg}
                >
                  <p>РЕГИСТРАЦИЯ</p>
                  <div className={styles.insideBtn}>
                    <BiUserPlus size="1.3em" fill="#565acf" />
                  </div>
                </button>
              </div>
              <div className={styles.loginBtn}>
                <button
                  className={styles.btnLogin}
                  onClick={props.onClickModal}
                >
                  <p>ВОЙТИ</p>
                  <div className={styles.insideBtn}>
                    <BsCaretRightFill size="1.3em" fill="#565acf" />
                  </div>
                </button>
              </div>
            </>
          )}
          {props.auth && (
            <div className={styles.loginBtn}>
              <button className={styles.btnLogin} onClick={() => logout()}>
                <p>ВЫЙТИ</p>
                <div className={styles.insideBtn}>
                  <ImExit size="1.3em" fill="#565acf" />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default MainHeader;
