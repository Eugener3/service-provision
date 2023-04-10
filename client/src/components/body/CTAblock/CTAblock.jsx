import React from "react"
import styles from "./CTAblock.module.scss"
import man from "../../../img/photos/man.png"

const CTAblock = () => {
  return (
    <div className={styles.CTAblock}>
      <div className={styles.wrapper}>
        <div className={styles.leftInfo}>
          <h6>Сервис свободных профессионалов</h6>
          <div className={styles.centerInfo}>
            <h2>Работаем, чтобы вы могли заниматься своим делом</h2>
          </div>
          <div className={styles.btnWrapper}>
            <button>Узнать больше</button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={man} alt='man' />
        </div>
      </div>
    </div>
  )
}

export default CTAblock
