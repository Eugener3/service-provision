import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import GlobalErrors from "../../UI/GlobalErrors/GlobalErrors"

import styles from "./AllQuery.module.scss"

import { BiHome } from "react-icons/bi"

import MainHeader from "../../header/MainHeader"

export const AllQuery = ({ props }) => {
  const [showContent, setShowContent] = useState(true)

  const [queries, setQueries] = useState([])

  const getToken = async () => {
    const token = localStorage.getItem("token")
    const headers = { Authorization: token }
    return headers
  }

  const [showAlert2, setShowAlert2] = useState({})

  useEffect(() => {
    const fetchQueries = async props => {
      const headers = await getToken()
      const result = await axios.get(`https://service-provision.onrender.com/api/query/`, {
        headers,
      })
      setQueries(result.data)
    }
    fetchQueries(props)
  }, [props])
  let jwt = localStorage.getItem("token")
  const headers = { Authorization: jwt }



//  const handleSubmited = async (id, data) => {
//     try {
//       await axios.patch(`https://service-provision.onrender.com/api/responsed/${id}`, {data}, { headers })
//       console.log("Данные успешно отправлены!")
//     } catch (error) {
//       console.log(error.response.data.message)
//     }
//   }
  return (
    <>
      <GlobalErrors object={showAlert2} />
      <div className={styles.wrapper}>
        <MainHeader />
        <div className={styles.allQueryWrapp}>
          <div className={styles.title}>
            <h6>Все заказы</h6>
            <Link to='/'>
              <div className={styles.button}>
                <BiHome className={styles.BiHomeIcon} />
                <p>Home</p>
              </div>
            </Link>
          </div>
          <div className={styles.wrapperAllQuery}>
            {queries.map(query => (
              <div key={query._id} className={styles.queryesWrapp}>
                <div>
                  <span> Заголовок:</span> <p>{query.title}</p>
                </div>
                <div>
                  <span> Описание: </span>
                  <p>{query.description} </p>
                </div>

                <div>
                  <span>Место:</span> <p>{query.place}</p>
                </div>

                <div>
                  <span> Дата завершения:</span>{" "}
                  <p>{query.deadline.substring(0, 10)}</p>
                </div>

                <div>
                  <span> Цена:</span>
                  <p>
                    от {query.priceOf} до {query.priceAf}
                  </p>
                </div>

                <div>
                  <span> Категория: </span> <p>{query.category}</p>
                </div>
                <button
                  className={styles.button}
                >
                  Откликнуться
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllQuery
