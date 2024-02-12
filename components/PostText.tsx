'use client'
import React, { useEffect } from 'react'
import { useRef } from 'react';
export default function PostText({text}:{text:string}) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
    if(ref.current) {
        ref.current.innerHTML = text!;
      }
    },[])
  return (
    <div ref={ref} className=' container max-w-[1440px] border rounded-xl'>

    </div>
  )
}
