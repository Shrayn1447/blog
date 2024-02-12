import { db } from "@/configs/prisma";
import { getServerSession } from "next-auth";
import { AuthConfig } from "@/configs/auth";
export async function getUser() {
    const session = await getServerSession(AuthConfig)
    try {
      const user = await db.user.findUnique({
        where: {
          email:session?.user?.email!
        }
      })
      return user
    } catch(e) {
      console.error(e)
    }
}


