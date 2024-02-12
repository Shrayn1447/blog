'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function BlogRouterLink({children,refId} : {children:React.ReactNode,refId:string}) {
    const router = useRouter()
  return (
    <div onClick={()=> {
        router.push(`/p/${refId}`,{scroll:false})
    }}
    className='hover:text-purple-300/90 max-w-[550px] text-[30px] font-bold text-center'>
        {children}
    </div>
  )
}
