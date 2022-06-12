import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import { signOut } from 'next-auth/react'

export const Sidebar = ({ user }) => {
  const [ expand, setExpand ] = useState(false)
  return (
    <div className={styles.sidebar} style={{maxWidth: expand ? 200 : null}}>
        {user?.image ? (
            <img src={user.image} width="100%" height='auto' alt="profile picture" className={styles.sidebarProfilePicture} />
        ) : <p>{user?.name}</p>}
        <div className={styles.sidebarNav}>
            <Link href='/tasks/all' passHref>
                <a>General</a>
            </Link>
            <Link href='/tasks/important' passHref>
                <a>Importantes</a>
            </Link>
            <Link href='/tasks/daily' passHref>
                <a>Diarias</a>
            </Link>

        </div>
        <div className={styles.sidebarButtons}>
            <button onClick={() => setExpand((prev) => !prev)} className={styles.sidebarToggle}>
                <img src="/assets/icons/arrow-right.svg" alt='expand sidebar' width='100%' height="auto" style={{transform: expand ? 'rotate(180deg)' : null}}/>
            </button>
            <button onClick={() => signOut()}>
                Cerrar sesión
            </button>
        </div>
     
    </div>
  )
}
