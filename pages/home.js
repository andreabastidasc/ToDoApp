import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
      if (!session) {
      router.push('/')
      }
  }, [router, session])
  return (
    <Layout>
      <p>Bienvenido</p>
    </Layout>
  )
} 
