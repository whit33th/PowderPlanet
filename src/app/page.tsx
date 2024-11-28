'use client'

import HomePage from '@/pages/HomePage'
import Info from '@/pages/Info'
import JinxShortInfo from '@/pages/JinxShortInfo'
import Skills from '@/pages/Skills'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home () {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main>
          <HomePage />
          <JinxShortInfo />
          <Skills />
          <Info />
        </main>
      </QueryClientProvider>
    </>
  )
}
