import React from 'react'
import styles from './Header.module.scss'
import logo from '../../img/logo.svg'

export const MainHeader = () => {
  return (
    <header>
        <div className={styles.headerWrapper}>
        <img src={logo} alt="logo"/>
            <div className={styles.headerBtns}>
                <p>Создать заказ</p>
                <p>Найти специалиста</p>
                <p>Мои заказы</p>
                <p>Стать исполнителем</p>
            </div>

            <div className={styles.loginBtn}>
                <button>Войти</button>
            </div>
        </div>
    </header>
  )
}
export default MainHeader