import React from 'react'
import { getServerSession } from 'next-auth'
import { AuthConfig } from '@/configs/auth'
import { Plus } from 'lucide-react';
import Search from './Search';
import  {ThemeChange} from '@/components/ui/ThemeChange'
import Link from 'next/link'
import Auth from '@/components/auth/Auth'
import { Menu } from './Menu'
import { Button } from '../ui/button'
export default async function Header() {
    const sesion = await getServerSession(AuthConfig)
  return (
    <div className='w-full sticky top-0 border-b-[1px] dark:bg-black/50 bg-white/50 backdrop-blur-md py-[20px]'>
    <div className='flex items-center justify-between container max-w-[1000px]'>
          <Link href={'/'} className='font-extrabold text-center text-2xl'>NextBlog</Link>
          <Search/>
          <div className='flex font-bold items-center justify-center gap-4'>
            
                <Link href={'/'}>
                    <Button variant={'outline'}>
                        Главная
                    </Button>
                </Link>
              {sesion ?  (
                <>
                <Link className='flex justify-center items-center' href={'/write'}>
                  <Button variant={'outline'}>
                    <Plus className='mr-2 h-4 w-4'/>Создать
                 </Button>
                </Link>
                  <Menu  srcImg={sesion?.user?.image!}/> 
                </>
              ): <Auth/>}

              <ThemeChange/>
          </div>
    </div>
    </div>
  )
}
