import { db } from "@/configs/prisma";
import { unstable_noStore as noStore } from 'next/cache';
export async function getPosts(query:string) {
   noStore()
   const posts = await db.post.findMany({
      where: {
        OR: [
          {
          title : {
            contains : query
          }}
        ]
      }
    })
   return posts
}