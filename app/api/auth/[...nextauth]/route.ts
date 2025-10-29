import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

const handler = NextAuth({
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        // @ts-ignore
        token.discord_id = profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.discord_id = token.discord_id;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
