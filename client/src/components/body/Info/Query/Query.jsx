import React, { useEffect, useState } from "react"
import axios from "axios"

import styles from "./Query.module.scss"

export const Query = props => {
  const [queries, setQueries] = useState([])
  const usersArray = []

  const getToken = async () => {
    const token = localStorage.getItem("token")
    const headers = { Authorization: token }
    return headers
  }

  useEffect(() => {
    const fetchQueries = async props => {
      const headers = await getToken()
      const result = await axios.get(
        `http://localhost:3001/api/query/byuser/${props.profile.idUser}`,
        {
          headers,
        }
      )

      setQueries(result.data)
    }
    fetchQueries(props)
  }, [props])

  const [respondedUserData, setRespondedUserData] = useState()
  queries.forEach(elem => {
    elem.responded.forEach(elem => {
      const token = localStorage.getItem("token")
      const headers = { Authorization: token }
      const result = axios
        .get(`http://localhost:3001/api/resume/byuser/${elem}`, {
          headers,
        })
        .then(result => {
          const dataObj = { data: result.data } // создание нового объекта с полем "data"
          setRespondedUserData(dataObj)
        })
    })
  })

  return (
    <div className={styles.wrapper}>
      <p className={styles.yourQuery}>Ваши заказы:</p>
      {queries.map(query => (
        <div key={query._id} className={styles.queryesWrapp}>
          <div>
            <span> Заголовок:</span> <p>{query.title}</p>
          </div>

          <div>
            <span> Описание: </span>
            <p>{query.description}</p>
          </div>

          <div>
            <span>Место:</span> <p>{query.place}</p>
          </div>

          <div>
            <span> Дата завершения:</span> <p>{query.deadline}</p>
          </div>

          <div>
            <span> Цена:</span>{" "}
            <p>
              от {query.priceOf} до {query.priceAf}
            </p>
          </div>

          <div>
            <span> Категория: </span> <p>{query.category}</p>
          </div>

          <div>
            <span> Откликнулись: </span>
 
          </div>
        </div>
      ))}
    </div>
  )
}

export default Query
