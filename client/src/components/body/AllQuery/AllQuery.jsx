import React, { useState} from "react"
import { Link } from "react-router-dom";

import styles from "./AllQuery.module.scss";

import { BiHome } from "react-icons/bi";

import MainHeader from "../../header/MainHeader";
import QueryComp from "./QueryComp";


export const AllQuery = ({props}) => {
    const [showContent, setShowContent] = useState(true);

  return (
    <div className={styles.wrapper}>
    <MainHeader />
    <div className={styles.allQueryWrapp}>
      <div className={styles.title}>
        <h6>Все заказы</h6>
        <Link to="/">
          <div className={styles.button}>
            <BiHome className={styles.BiHomeIcon} />
            <p>Home</p>
          </div>
        </Link>
      </div>
      <div className={styles.wrapperAllQuery}>
        {props && props.length > 0 ? (
          showContent ? <QueryComp  props={props}/> : null
        ) : (
          <p className={styles.queryEmpty} >Заявок нет</p>
        )}
        
      </div>
    </div>
  </div>
);
};


export default AllQuery;
