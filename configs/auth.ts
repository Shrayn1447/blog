import type { AuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./prisma"
import { Adapter } from "next-auth/adapters"
export const AuthConfig:AuthOptions = {
    adapter:PrismaAdapter(db) as Adapter,
    providers : [
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET
}