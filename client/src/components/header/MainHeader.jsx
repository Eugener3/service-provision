import React from 'react'
import styles from './Header.module.scss'
import logo from '../../img/logo.svg'

export const MainHeader = (props ,{user}) => {
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
            {user}
            {!user (<div className={styles.loginBtn}>
                <button onClick={props.onClickModal}>Войти</button>
            </div>)}
        </div>
    </header>
  )
}
export default MainHeader