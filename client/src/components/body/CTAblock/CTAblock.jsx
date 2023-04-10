import React from "react"
import styles from "./CTAblock.module.scss"
import doctor from "../../../img/photos/doctor.png"

const CTAblock = () => {
  return (
    <div className={styles.CTAblock}>
      <div className={styles.wrapper}>
        <div className={styles.leftInfo}>
          <h6>We Provide All Health Care Solution</h6>
          <div className={styles.centerInfo}>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
          </div>
          <div className={styles.btnWrapper}>
            <button>Read More</button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={doctor} alt='doctor' />
        </div>
      </div>
    </div>
  )
}

export default CTAblock
