import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_ID || '',
      clientSecret: process.env.OAUTH_SELECT || '',
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
