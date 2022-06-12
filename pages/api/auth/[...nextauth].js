/* eslint-disable no-undef */
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@mail.com" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.email === 'admin@mail.com' && credentials.password === 'admin1234') {
          const user = {
            id: 'admin',
            name: 'Admin',
            email: 'admin@mail.com',
          }
          return user
        } else {
          return null
        }
      }
    }),     
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    }, 
    session: ({ token, session }) => {
      if (token) {
        session.id = token.id
      }
      return session
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    encryption: true,
  }
})