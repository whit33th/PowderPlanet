import useGetHero from '@/api/Hooks/useGetHero'
import React from 'react'
import Image from 'next/image'
import FullScreenGrafity from './../components/Containers/FullScreanGrafity';

function Skills() {
  const hero = 'Jinx'
  const { data, isLoading } = useGetHero(hero)

  const key = ['Q', 'W', 'E', 'R']

  const formatTooltip = (tooltip: string) => {
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
  console.log(data)

  return (
    <div className="p-24 relative   ">
      <div className='*:blur-[1px]'>
        
        <Image src={`/assets/img/cloud2.webp`} alt="" width={220} height={100} className="absolute top-[40px] left-[170px] -rotate-6 opacity-70" />
        <Image src={`/assets/img/cloud1.webp`} alt="" width={200} height={100} className="absolute top-[50px] right-[70px] rotate-6 opacity-30" />

        
        <Image src={`/assets/img/cloud2.webp`} alt="" width={200} height={100} className="absolute top-[70px] right-[400px] rotate-12 opacity-60" />
</div>
     
      <div className='mb-12'>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.spells.map((spell: any, index: number) => (
            <div key={index} className="flex flex-col bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              
              <video
                className="w-full object-cover "
                autoPlay
                loop
                muted
                disablePictureInPicture
                src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0${data.key}_${key[index]}1.mp4`}
              ></video>


              <div className="p-4 flex flex-col gap-4">

                <div className="flex items-center gap-4">
                  <Image
                    src={`/assets/img/${spell.id}.webp`}
                    alt=""
                    width={64}
                    height={64}
                    className="rounded-md border border-gray-700"
                  />
                  <h3 className="text-white text-lg font-semibold">{spell.name}</h3>
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

      <FullScreenGrafity/>
    </div>
  )
}

export default Skills
