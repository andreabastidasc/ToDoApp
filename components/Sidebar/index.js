import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import { signOut } from 'next-auth/react'

export const Sidebar = ({ user }) => {
  const [expand, setExpand] = useState(false)
  return (
    <div className={styles.sidebar} style={{ maxWidth: expand ? 200 : null }}>
        {user?.image
          ? (
            <img src={user.image} width="100%" height='auto' alt="profile picture" className={styles.sidebarProfilePicture} />
            )
          : <p>{user?.name}</p>}
        <div className={styles.sidebarNav} style={{ padding: !expand ? '0rem 2rem' : '0 2rem' }}>
            <Link href='/tasks/all' passHref>
                <a style={{ gap: !expand ? 100 : null, margin: !expand ? '0' : null }}>
                    <img src='/assets/icons/list.svg' alt='general task' width="100%" heigth="auto" />
                    General
                </a>
            </Link>
            <Link href='/tasks/important' passHref>
                <a style={{ gap: !expand ? 100 : null, margin: !expand ? '0' : null }}>
                    <img src='/assets/icons/alert-circle.svg' alt="important task" width="100%" height="auto" />
                    Important
                </a>
            </Link>
            <Link href='/tasks/daily' passHref>
                <a style={{ gap: !expand ? 100 : null, margin: !expand ? '0' : null }}>
                    <img src='/assets/icons/calendar.svg' alt='daily task' width="100%" height="auto"/>
                    Daily
                </a>
            </Link>
            <div className={styles.sidebarButtons}>
            <button onClick={() => setExpand((prev) => !prev)} className={styles.sidebarToggle}>
                <img src="/assets/icons/arrow-right.svg" alt='expand sidebar' width='100%' height="auto" style={{ transform: expand ? 'rotate(180deg)' : null }}/>
            </button>
            <button type="button" className={styles.sidebarSignOutButton} style={{ gap: expand ? 20 : null }} onClick={() => signOut()}>
                <img src='/assets/icons/log-out.svg' alt='sign out' width="100%" height="auto" />
                Sign out
            </button>
            </div>
        </div>

    </div>
  )
}
