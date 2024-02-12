import React from 'react'
import { db } from '@/configs/prisma'
import { AuthConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth'
import PostRedaction from '@/components/PostRedaction'
interface PostWithId {
  authorId: number | undefined;
  id: number;
}
export default async function page() {
const session = await getServerSession(AuthConfig)
const user = await db.user.findUnique({
  where : {
    email:session?.user?.email!
  },
  include: {
    posts:true
  }
})
 return (
    <ul className=' container mx-auto max-w-[1440px]'>
      <h1 className=' text-[40px] font-bold'>My posts📖:</h1>
        {user?.posts.map(el => {
          return (
            <li key={el.id}>
              <PostRedaction post={el}/>
            </li>
          )
        }) }
    </ul>
  )
}
