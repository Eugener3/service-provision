import React, { useState } from 'react'
import styles from "./AboutUS.module.scss"

import doctors1 from "../../../img/photos/doctors1.jpg"
import doctors2 from "../../../img/photos/doctors2.jpg"
import doctors3 from "../../../img/photos/doctors3.jpg"

import stoluar from "../../../img/photos/stoluar.jpeg"
import teacher from "../../../img/photos/teacher.png"
import svarchik from "../../../img/photos/svarchik.jpg"

import GlobalErrors from '../../UI/GlobalErrors/GlobalErrors'

import { BsSpeedometer2 } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import {BsShield} from "react-icons/bs";



export const AboutUS = () => {
    const [showError, setShowError] = useState(false);

    const handleButtonClick = () => {
    setShowError(true);
    };
  return (
    <div className={styles.wrapper}>
        <div className={styles.podWrap}>
            <div className={styles.thumbArea}>
                <ul>
                    <li><img className={styles.thumb1} src={teacher} alt="image" /></li>
                    <li><img className={styles.thumb2} src={svarchik} alt="image" /></li>
                    <li><img className={styles.thumb3} src={stoluar} alt="image" /></li>
                    <li className={styles.latestLi}><div className={styles.expBox}><span className={styles.years}>20</span><br/><span className={styles.working}>Лет на рынке</span> </div></li>
                </ul>
            </div>

            <div className={styles.aboutUs}>
                <div className={styles.aboutUsInside}>
                     <h6>О нас</h6>
                     <h2>Наша платформа - место, где растут карьеры и бизнесы.</h2>
                     <p>Конечная цель нашей компании - свободный доступ к профессиональным услугам. Мы стремимся сделать работу легче и удобнее для всех.</p>
                </div>

                <div className={styles.rowInfo}>
                    <div className={styles.divFirst}><BsSpeedometer2 fill='black'/> <p> Высокая скорость </p></div>
                    <div className={styles.divSecond}><FcCheckmark/> <p>Сертифицированные работники</p></div>
                    <div className={styles.divThird}><BsShield fill='#1f2278'/> <p>Гарантия на выполнение</p></div>
                    <div className={styles.divLast}><FcLike/> <p>Довольные заказчики</p></div>
                </div>

                <div className={styles.btnMore}>Узнать больше</div>

                <button onClick={handleButtonClick}>Показать ошибку</button>
                {showError && <GlobalErrors type='confirm' message='проблемы'/>
}

            </div>
        </div>
    </div>
  )
}
export default AboutUS