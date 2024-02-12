
import React from 'react'
import PostText from '@/components/PostText'
import { db } from '@/configs/prisma'
export async function generateStaticParams() {
  const posts = await db.post.findMany()
  return posts.map((post) => ({
    slug: post.id.toString(),
  }))
}
export default async function page({params}: {params: { postid: string}}) {
  const post = await db.post.findUnique({
    where: {
      id : Number(params.postid),
    }
  })
  return (
    <div className='container max-w-[1440px] px-[40px]'>
      <PostText text={post?.text!}/>
    </div>
  )
}
