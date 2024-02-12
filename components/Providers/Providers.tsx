'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import {
  QueryClient,
  QueryClientProvider,} from '@tanstack/react-query'

export default function Providers(
    {children, ...props} : ThemeProviderProps) {
      const queryClient = new QueryClient()
  return (
   
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
          <NextThemesProvider {...props}>
            {children}
          </NextThemesProvider>
        </QueryClientProvider>
    </SessionProvider>
    
  )
}
