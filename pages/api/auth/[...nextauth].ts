import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
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
