'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export default function Auth() {
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button variant={'outline'}>Войти</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='w-[40%]'>
        <AlertDialogHeader className=' flex justify-center text-center'>
          <AlertDialogTitle className="text-center before:w-14 before:h-2 relative before:relative before:content-[''] pb-[20px] ">Авторизация</AlertDialogTitle>
          <AlertDialogDescription className=' flex justify-center'>
              <Button variant="outline" className='text-center w-18 h-18 flex justify-center items-center  rounded-xl' onClick={() => signIn('google')}>
                <Image className='h-14 w-14'  width={500} height={500} src="/Google.png" alt="Google Logo" />
              </Button>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Закрыть</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
