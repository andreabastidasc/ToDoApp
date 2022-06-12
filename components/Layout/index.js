import React from 'react'
import { Sidebar } from '../Sidebar'
import styles from './Layout.module.scss'
import { useSession } from 'next-auth/react'

export const Layout = ({ children }) => {
  const { data: session } = useSession()
  return (
    <div className={styles.wrapper}>
      <Sidebar user={session?.user} />
      <main>{children}</main>
    </div>
  )
}
