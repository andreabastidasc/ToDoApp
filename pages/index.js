import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Spinner } from 'react-bootstrap'

//CREDENTIALS

//mail: admin@mail.com
//password: admin1234

export default function Login() {
  const router = useRouter()
  const { data: session } = useSession()
  console.log(session)
  useEffect(() => {
    if (session) { 
      router.push('/home')
    }  else {
      router.push('/api/auth/signin')
    }
  }, [router, session])

  return (
    <Layout>
      <Spinner />
    </Layout>
  )
}

