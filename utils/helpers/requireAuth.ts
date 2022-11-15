/* eslint-disable no-unused-vars */
import { GetServerSidePropsContext } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

export const requireAuth = async (
  context: GetServerSidePropsContext,
  callback: (session: Session) => void
) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return callback(session)
}
