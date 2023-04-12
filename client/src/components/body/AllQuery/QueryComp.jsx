import React from 'react'
import styles from './AllQuery.module.scss'

export const QueryComp = (props) => {
  return (
    <div className={styles.queryesWrapp}>
            <div>
              <span> Заголовок:</span> <p>{props.title}</p>
            </div>
            <div>
              <span> Описание: </span>
              <p>{props.description} </p>
            </div>

            <div>
              <span>Место:</span> <p>{props.place}</p>
            </div>

            <div>
              <span> Дата завершения:</span> <p>{props.deadline}</p>
            </div>

            <div>
              <span> Цена:</span> <p>от {props.priceOf} до {props.Af}</p>
            </div>

            <div>
              <span> Категория: </span> <p>{props.category}</p>
            </div>
            <button>Откликнуться</button>
          </div>
  )
}

export default QueryComp

