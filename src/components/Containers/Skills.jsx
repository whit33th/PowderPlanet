'use client'

import useGetHero from '@/api/Hooks/useGetHero'
import React from 'react'
import Image from 'next/image'
import FullScreenGrafity from './FullScreanGrafity'



function Skills() {
  const hero = 'Jinx'
  const { data, isLoading } = useGetHero(hero)

  const key = ['Q', 'W', 'E', 'R']

  const formatTooltip = (tooltip) => {
    return tooltip
      .replace(
        /<physicalDamage>(.*?)<\/physicalDamage>/g,
        `<span class="text-orange-400 font-bold"><Image src="/assets/icons/physical.png" alt="" class="inline w-4 h-4 mr-1"/>$1</span>`
      )
      .replace(
        /<magicDamage>(.*?)<\/magicDamage>/g,
        `<span class="text-purple-400 font-bold"><Image src="/assets/icons/magic.webp" alt="" class="inline w-4 h-4 mr-1"/>$1</span>`
      )
      .replace(
        /<trueDamage>(.*?)<\/trueDamage>/g,
        `<span class="text-red-400 font-bold"><Image src="/assets/icons/true.png" alt="" class="inline w-4 h-4 mr-1"/>$1</span>`
      )
      .replace(
        /<attackSpeed>(.*?)<\/attackSpeed>/g,
        `<span class="text-green-400 font-bold">$1</span>`
      )
      .replace(/\{\{(.*?)\}\}/g, '')

  }


  return (
    <div className="md:p-24 relative p-4   ">


      <div className='mb-12 z-10 '>
        <h1 className='text-5xl text-center'>Skills</h1>
        <h1 className='text-5xl text-center'>
          Ski<span className='text-[#3e71d7]'>X</span>
          <span className='text-[#a93ed7]'>X</span>
          s
        </h1>
        <h1 className='text-5xl text-center'>
          <span className='text-[#a1e657]'>X</span>kills
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.spells.map((spell, index) => (
            <div key={index} className="flex flex-col bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <Image src={`/assets/img/Smile.png`} alt="" width={200} height={200} className="hidden md:block absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/3  scale-y-[1.15] drop-shadow-[0_10px_20px_#431dc11f] opacity-90 brightness-[0.8] rotate-[12deg] " />
              
              <Image src={`/assets/img/butterfly.png`} alt="" width={300} height={300} className=" hidden md:block  absolute bottom-0 right-20 md:right-0 translate-x-1/2 translate-y-1/2  opacity-90   rotate-[-40deg] hue-rotate-30 drop-shadow-2xl md:w-[150px] w-32 " />


              <video
                className="w-full object-cover "
                autoPlay
                loop
                muted
                disablePictureInPicture
                src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0${data.key}_${key[index]}1.mp4`}
              ></video>


              <div className="p-4 flex flex-col gap-4">

                <div className="flex items-center gap-4 overflow-hidden">
                  
                  <Image
                    src={`/assets/img/${spell.id}.webp`}
                    alt=""
                    width={64}
                    height={64}
                    className="rounded-md border relative border-gray-700"
                    
                  />
                  
                  <div className=' flex'>
                    <h3 className="text-white text-lg font-semibold w-lvw ">{spell.name}</h3>
                    
                  </div>

                </div>


                <p
                  className="text-gray-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatTooltip(spell.tooltip) }}
                ></p>
              </div>
            </div>
          ))
        )}
      </div>

      <Image src={`/assets/img/Workshop.png`} alt="" width={1500} height={1200} className="absolute top-0 left-0 w-full h-full z-[-1] opacity-30 blur-md" />

      <FullScreenGrafity />
    </div>
  )
}

export default Skills
