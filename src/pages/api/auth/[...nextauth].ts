import NextAuth from "next-auth";
import { authOptions } from "~/core/server/auth";

export default NextAuth(authOptions);
