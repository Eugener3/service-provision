import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import styles from "./FindExpert.module.scss"
import { BiHome } from "react-icons/bi"

import MainHeader from "../../header/MainHeader"
export const FindExpert = props => {
  const [experts, setExperts] = useState([])

  const getToken = async () => {
    const token = localStorage.getItem("token")
    const headers = { Authorization: token }
    return headers
  }

  useEffect(() => {
    const fetchQueries = async props => {
      const headers = await getToken()
      const result = await axios.get(`https://service-provision.onrender.com/api/resume/`, {
        headers,
      })

      setExperts(result.data)
    }
    fetchQueries(props)
  }, [props])
  console.log(experts)
  return (
    <div className={styles.mainWrapper}>
      <MainHeader />

      <div className={styles.findExpertWrapp}>
        <div className={styles.title}>
          <h6>Найти специалиста</h6>
          <Link to='/'>
            <div className={styles.btnHome} style={{ marginTop: "30px" }}>
              <BiHome className={styles.BiHomeIcon} />
              <p>Home</p>
            </div>
          </Link>
        </div>

        <div className={styles.wrapperExperts} style={{ marginTop: "20px" }}>
          {experts.map(expert => (
            <div className={styles.ExpertsWrapp}>
              <div>
                <span> ФИО:</span> <p>{expert.FIO}</p>
              </div>
              <div>
                <span> Телефон: </span>

                <a href={"tel:"+expert.telephone}><p style={{color: 'black'}}>{expert.telephone}</p></a>
              </div>

              <div>
                <span>E-mail:</span> <p>{expert.email}</p>
              </div>

              <div>
                <span> Описание:</span> <p>{expert.description}</p>
              </div>
              <a href={"tel:"+expert.telephone}><button className={styles.button}>Связаться</button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindExpert
