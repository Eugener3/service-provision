import { React, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import styles from "./Header.module.scss"

import logo from "../../img/logo.svg"

import { BsCaretRightFill } from "react-icons/bs"
import { BiUserPlus, BiUserCircle } from "react-icons/bi"
import { ImExit } from "react-icons/im"

import logout from "../functions/logout"

export const MainHeader = props => {
  let authToken = localStorage.getItem("token")
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    if (authToken) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [authToken])

  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link to='/'>
          <div className={styles.leftItems}>
            <img src={logo} alt='logo' />
            <p>WorkHero</p>
          </div>
        </Link>

        {auth && (
          <div className={styles.headerBtns}>
            <Link to='/query'>
              <p>Создать заказ</p>
            </Link>
            <p>Найти специалиста</p>
            <Link to='/info'>
              <p>Личный кабинет</p>
            </Link>
            <p>Стать исполнителем</p>
          </div>
        )}

        {!auth && (
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
          {!auth && (
            <>
              <div className={styles.loginBtn}>
                <button
                  className={styles.btnReg}
                  onClick={props.onClickModalReg}
                >
                  <p>РЕГИСТРАЦИЯ</p>
                  <div className={styles.insideBtn}>
                    <BiUserPlus size='1.3em' fill='#565acf' />
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
                    <BsCaretRightFill size='1.3em' fill='#565acf' />
                  </div>
                </button>
              </div>
            </>
          )}
          {auth && (
            <div className={styles.loginBtn}>
              <div className={styles.rightButtons}>
                <button className={styles.btnLogin}>
                  <p>ПРОФИЛЬ</p>
                  <div className={styles.insideBtn}>
                    <BiUserCircle size='2em' fill='#565acf' />
                  </div>
                </button>
                <button className={styles.btnLogout} onClick={() => logout()}>
                  <div className={styles.insideBtn}>
                    <ImExit size='1.3em' fill='#565acf' />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
export default MainHeader
