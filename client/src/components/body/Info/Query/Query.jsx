import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'

import styles from './Query.module.scss'

export const Query = () => {
    // const [projects, setProjects] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    

    // useEffect(() => {
    //   const fetchData = async () => {
    //     setIsLoading(true);
    //     try {
    //       const response = await axios.get("http://localhost:3001/api/user/64356364f64529d18606461e");
    //       const { data } = response;
    //       const { _id, refUser, title, description, price, deadline, category, responded, createData, __v } = data;
    //       // здесь мы разбираем массив на отдельные переменные
    //       setProjects({ _id, refUser, title, description, price, deadline, category, responded, createData, __v });
    //       setIsLoading(false);
    //     } catch (error) {
    //       setError(error);
    //       setIsLoading(false);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }

  return (
    <div className={styles.wrapper}>
        {/* <h1>{projects.title}</h1>
        <p>{projects.description}</p> */}

        <p className={styles.yourQuery}>Ваши заказы:</p>
    
        <div className={styles.queryesWrapp}>
            <div>
               <span> Заголовок:</span> <p>Example</p>
            </div>
            <div>
               <span> Описание: </span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>

            <div>
                <span>Место:</span> <p>ExampleExampleExample</p>
            </div>

            <div>
               <span> Дата завершения:</span> <p>12.04.2023</p>
            </div>

            <div>
               <span> Цена:</span> <p>от 2900 до 5700</p>
            </div>

            <div>
                 <span> Категория: </span> <p>Example</p>
            </div>
        </div>

        <div className={styles.queryesWrapp}>
            <div>
               <span> Заголовок:</span> <p>Example</p>
            </div>
            <div>
               <span> Описание: </span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>

            <div>
                <span>Место:</span> <p>ExampleExampleExample</p>
            </div>

            <div>
               <span> Дата завершения:</span> <p>12.04.2023</p>
            </div>

            <div>
               <span> Цена:</span> <p>от 2900 до 5700</p>
            </div>

            <div>
                 <span> Категория: </span> <p>Example</p>
            </div>
        </div>


        <div className={styles.queryesWrapp}>
            <div>
               <span> Заголовок:</span> <p>Example</p>
            </div>
            <div>
               <span> Описание: </span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>

            <div>
                <span>Место:</span> <p>ExampleExampleExample</p>
            </div>

            <div>
               <span> Дата завершения:</span> <p>12.04.2023</p>
            </div>

            <div>
               <span> Цена:</span> <p>от 2900 до 5700</p>
            </div>

            <div>
                 <span> Категория: </span> <p>Example</p>
            </div>
        </div>

        <div className={styles.queryesWrapp}>
            <div>
               <span> Заголовок:</span> <p>Example</p>
            </div>
            <div>
               <span> Описание: </span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>

            <div>
                <span>Место:</span> <p>ExampleExampleExample</p>
            </div>

            <div>
               <span> Дата завершения:</span> <p>12.04.2023</p>
            </div>

            <div>
               <span> Цена:</span> <p>от 2900 до 5700</p>
            </div>

            <div>
                 <span> Категория: </span> <p>Example</p>
            </div>
        </div>
        
    </div>
  )
}

export default Query
