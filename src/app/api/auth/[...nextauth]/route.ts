import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { prisma } from "../../database/prisma";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        console.log(credentials)

        if(!credentials) {
            return null;
        }

        const userFound = await prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        })

        if (!userFound) throw new Error('No user found')

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

        if (!matchPassword) throw new Error('Wrong password')

        const session = await prisma.session.create({
          data: {
            sessionToken: Math.random().toString(36).substr(2),
            userId: userFound.id,
            expires: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)) // Expires in 30 days
          }
        });

        return {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            sessionToken: session.sessionToken 
        }
      },
    }),
  ],
  pages: {
    signIn: "auth/login"
  },
  // Defina a chave secreta aqui
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
