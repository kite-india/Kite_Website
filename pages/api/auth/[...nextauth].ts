import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'emailpwdsign',
      credentials: {
        email: {
          label: 'email',
          type: 'email'
        }
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    signIn: async () => {
      return Promise.resolve(true)
    },
    session: ({ session }) => {
      return session
    }
  }
}

export default NextAuth(authOptions)
