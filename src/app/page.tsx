'use client'

import HomePage from '@/pages/HomePage'
import Info from '@/pages/Info'
import JinxShortInfo from '@/pages/JinxShortInfo'

export default function Home() {


  return (
    <>
      <main className="relative">
        <HomePage />
        <JinxShortInfo/>

        <Info/>
      </main>
    </>
  )
}
