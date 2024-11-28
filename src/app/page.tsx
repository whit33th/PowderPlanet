'use client'

import HomePage from '@/components/Containers/HomePage'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Info from '@/components/Containers/Info'
import JinxShortInfo from '@/components/Containers/JinxShortInfo'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Skills from '@/components/Containers/Skills'
import ConceptArt from './../components/Containers/ConceptArt'

export default function Home() {


  return (
    <>

      <main>
        <HomePage />
        <JinxShortInfo />
        <ConceptArt />

        {/* секция лола */}
        {/* <Skills /> */}


        {/* <Info /> */}
      </main>

    </>
  )
}
