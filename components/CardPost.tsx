import { db } from '@/configs/prisma';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import BlogRouterLink from './BlogRouterLink';
import { unstable_noStore as noStore } from 'next/cache';
interface Post {
   post : {
    id: number;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    text: string;
    title: string;
    img: string;
    published: boolean;
   },
   

}
export default async function CardPost({ post } : Post) {
  noStore()
  const user = await db.user.findUnique({
      where: {
        id:post.authorId
      }
    }
  )
  return (
    <div className='h-[200px] container mx-auto p-3  max-w-[800px] my-[20px] border rounded-lg dark:bg-[#171717] bg-[#f5f5f5]'>
        <div className='flex gap-2 items-center'>
            <Image height={200} width={200} className=' rounded-full h-auto w-[50px]' src={user?.image!} alt='logo' />
            <p>{user?.name}</p>
            <p className=''>{`${post.createdAt.getDate()} ${post.createdAt.getMonth()} ${post.createdAt.getFullYear()}`}</p>
        </div>
        <div className=' cursor-pointer  overflow-hidden flex justify-center'>
            <BlogRouterLink refId={post.id.toString()} >{post.title}</BlogRouterLink>
        </div>
        <div>
        </div>
    </div>
  )
}
