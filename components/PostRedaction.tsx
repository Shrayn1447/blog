import React from 'react'
import { Button } from './ui/button';
import { db } from '@/configs/prisma';
import { Post } from '@/lib/Interface';
export default async function PostRedaction({post} : Post) {
    const user = await db.user.findUnique({
        where: {
            id:post.authorId
        }
    })
  return (
    <div className='border max-w-[1000px] dark:bg-slate-950 bg-neutral-100 p-6 container mx-auto min-h-[300px] my-[20px] rounded-md'>
        <div className='flex gap-3 items-center'>
          <img className='h-[50px] w-[50px] rounded-full' src={user?.image!} />
          <span>{user?.name}</span>
        </div>
        <img className='h-[150px]' src={post.img} alt="" />
        <h1 className=' font-bold text-[20px]'>{post.title}</h1>
        <div className='flex gap-3 justify-center'>
          <Button variant={'outline'}>Редактировать</Button>
          <Button variant="destructive">Удалить</Button>
        </div>
    </div>
  )
}
