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
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_KEY_SECRET
  },
  callbacks: {
    session: async ({ session, user }) => {
      session.id = user.id
      return Promise.resolve(session)
    }
  }
}

export default NextAuth(authOptions)
