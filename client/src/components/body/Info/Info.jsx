import React, { useState } from 'react'
import styles from './Info.module.scss'

import MainHeader from '../../header/MainHeader'

import Profile from './Profile/Profile'
import Query from './Query/Query'


const Info = () => {

    const [profileOpen, setProfileOpen] = useState(true)
    const [queryOpen, setQueryOpen] = useState(false)
    const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
        <MainHeader/>
        <div className={styles.infoWrapp}>
            <div className={styles.infoRow}>
                <div className={styles.itemsWrapp}>
                    <button onClick={() => setProfileOpen(true)} className={styles.btnProfile}>Профиль</button>
                
                    <button onClick={() => setQueryOpen(true)} className={styles.btnQuery}>Мой заказ</button>

                    <button className={styles.btnResume}>Резюме</button>
                </div>
                {profileOpen && (
                    <Profile /*onOpenProfile={() => setProfileOpen(true)}*//>
                )}
                {queryOpen && (
                    <Query/>
                )}

                
            </div>
        </div>
    </div>
  )
}

export default Info
