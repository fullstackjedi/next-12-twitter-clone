import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize(data: any) {
        const authObj = { ...data }

        if (!authObj.isLoggedIn) return null

        return {
          ...JSON.parse(authObj.user),
          accessToken: authObj.accessToken,
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    jwt: async ({ token, user }: any) => {
      // user is forwared from what is returned from the authorize function in the cred provider
      if (user) {
        token.accessToken = user.accessToken
      }

      return token
    },
    session: async ({ session, token }) => {
      // token is forwared from what is returned from the jwt callback
      // @ts-expect-error - forwarding the accessToken back to the client in the session object
      session.accessToken = token.accessToken

      return session
    },
  },
})
