import React from 'react'
import { getServerSession } from 'next-auth'
import {AuthConfig} from '@/configs/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/configs/prisma'
import { getUser } from '@/lib/data/read/getUser'

export default async function page() {
  const session =  await getServerSession(AuthConfig)
  async function handler(formData:FormData) {
    'use server'
    const data = await db.user.update({
      where:{
         email:session?.user?.email as string,
      },
      data: {
        name: formData.get('name') as string,
      }
    })

  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className=' text-2xl'><span>Имя: </span>{session?.user?.name}</div>
        <div className=' text-2xl'><span>Email: </span>{session?.user?.email}</div>
        <img className=' rounded-full' src={session?.user?.image!} alt="Img" />
        <form  action={handler} className='flex gap-3'>
            <Input type='text' name='name' placeholder={session?.user?.name!}/>
            <Button type='submit' variant={'outline'}>Редактировать имя</Button>
        </form>
    </div>
  )
}
