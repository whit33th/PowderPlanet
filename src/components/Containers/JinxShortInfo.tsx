'use client'

import Image from 'next/image'
import React, { useState } from 'react'

function JinxShortInfo() {
  const [isJinx, setIsJinx] = useState(true)
  const handleToggle = () => {
    setIsJinx(!isJinx)
  }
  return (

    <div
      className='w-full  overflow-hidden    relative  [mask-image:linear-gradient(360deg,#d9d9d9_70.62%,rgba(115,115,115,0)_100%)]
		
		'
    >
      <Image
        className={`[mask-image:linear-gradient(180deg,#d9d9d9_70.62%,rgba(115,115,115,0)_100%)]
			absolute top-0 left-0 z-0 blur-[4px] opacity-5 object-cover object-center w-full h-full ${!isJinx ? 'hue-rotate-[290deg]' : ''} transition-hue duration-1000 ease-in-out`}
        width={1920}
        height={1080}
        src={'/assets/img/CoolBack.webp'}
        alt='background'
      />
      <div className='sm:px-36 px-12 pt-28 pb-28  relative  '>
        <div>
          <div>
            <Image
              className='absolute top-12 -left-4 -hue-rotate-120 -translate-y-8 shadow-sm animate-fadeCycle opacity-20 rotate-2 z-0'
              style={{ animationDelay: '0s' }}
              width={200}
              height={100}
              src='/assets/img/JinxMonkeyGrafity2.webp'
              alt='grafity'
            />
            <Image
              className='absolute top-18 left-12 -hue-rotate-30 -translate-y-8 shadow-sm animate-fadeCycle opacity-40 -rotate-2 z-0'
              style={{ animationDelay: '2s' }}
              width={200}
              height={100}
              src='/assets/img/JinxMonkeyGrafity2.webp'
              alt='grafity'
            />
            <Image
              className='absolute top-20 left-20 -translate-y-8 shadow-sm animate-fadeCycle opacity-45 -rotate-14 backdrop-blur-sm transform scale-x-[-1] z-0'
              style={{ animationDelay: '4s' }}
              width={200}
              height={100}
              src='/assets/img/JinxMonkeyGrafity2.webp'
              alt='grafity'
            />
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-12  '>
          <div className=' flex-1 z-10 md:gap-4 gap-8 flex flex-col '>
            <p className='text-6xl  '>
              {isJinx ?
                <>
                  The Loose
                  <br />
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#de59ea] via-[#59cfea] to-[#9859ea]'>
                    Cannon
                  </span></>
                : <>
                  The Little
                  <br />
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#59cfea] via-[#596fea] to-[#ea59e5]'>
                    Inventor
                  </span></>}
            </p>

            <div className='relative flex w-full md:hidden  justify-center'>
              <video
                className='
                w-[300px] h-[300px] rounded-full
    object-cover 
    object-center z-0 border-8 border-pink-500
  "'
                disablePictureInPicture
                preload='auto'
                autoPlay
                playsInline
                loop
                muted
              >
                <source src='/assets/video/JinxAvatar.mp4' type='video/mp4' />
              </video>


            </div>
            <div>

              {isJinx ? <><p className='text-2xl  text-[#cd4574] mb-4'>
                Volatile explosives are a girl’s best friend!
              </p></> : <><p className='text-2xl text-[#59cfea] mb-4'>
                Ingenious gadgets for her family.
              </p></>}

              <div className='relative'>



                <p className='max-w-2xl relative text-sm font-mono bg-[#18181899] p-4 rounded-xl border-[1px] border-[#262626]'>

                  {isJinx ? <> A manic and impulsive criminal from Zaun, Jinx lives to wreak
                    havoc without care for the consequences. With an arsenal of
                    deadly weapons, she unleashes the loudest blasts and brightest
                    explosions to leave a trail of mayhem and panic in her wake.
                    Jinx despises boredom, and gleefully brings her own chaotic
                    brand of pandemonium wherever she goes.</> : <>Once a shy and brilliant inventor, Powder loved crafting
                      ingenious gadgets to help her family. But after a tragic
                      accident and feeling abandoned, she embraced chaos and
                      became Jinx, leaving behind the kind-hearted girl she once
                      was.</>}
                </p>
                <Image
                  className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2   z-0 rotate-[20deg]'
                  src={'/assets/img/blow2.webp'}
                  width={60}
                  height={40}
                  alt='grafity'
                />
                <Image
                  className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] '
                  src={'/assets/img/blow4.webp'}
                  width={40}
                  height={40}
                  alt='grafity'
                />
              </div>
            </div>
          </div>

          <div className=' hidden md:flex flex-1  justify-center items-center relative'>
            <div className='relative '>
              <div className="relative">
                <div className="relative w-[350px] h-[350px]" onClick={handleToggle}>

                  <div
                    className={`cursor-pointer  transition-opacity duration-500 ease-in-out absolute inset-0 z-10 ${isJinx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                  >
                    <video
                      className=" w-full h-full rounded-full object-cover object-center z-0 border-8 border-pink-500 "
                      disablePictureInPicture
                      preload="auto"
                      autoPlay
                      playsInline
                      loop
                      muted
                    >
                      <source src="/assets/video/JinxAvatar.mp4" type="video/mp4" />
                    </video>
                  </div>


                  <div
                    className={`cursor-pointer transition-opacity duration-500 ease-in-out absolute inset-0 ${!isJinx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                  >


                    <video
                      className="w-full h-full rounded-full object-cover object-center z-0 border-8 border-blue-400"
                      disablePictureInPicture
                      preload="auto"
                      autoPlay
                      playsInline
                      loop
                      muted 
                    >
                      <source src="/assets/video/Powder.mp4" type="video/mp4" />
                    </video>

                    

                  </div>
                </div>
              </div>
            </div>

            <video
              className={`md:w-[400px] md:h-[400px] w-[350px] h-[350px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 extra blur-[10px] z-[-1] rounded-full opacity-50
    object-cover
    object-center ${!isJinx ? 'hue-rotate-[300deg]' : ''}`}
              disablePictureInPicture
              preload='auto'
              autoPlay
              playsInline
              loop
              muted
            >
              <source src='/assets/video/JinxAvatar.mp4' type='video/mp4' />
            </video>

          </div>
        </div>
      </div>
      <Image
        className='
			
			absolute bottom-1 right-0  z-0 rotate-[20deg] '
        src={'/assets/img/blow3.webp'}
        width={115}
        height={140}
        alt='grafity'
      />
      <Image
        className='absolute bottom-12 right-6  z-0 rotate-[16deg] -hue-rotate-30 '
        src={'/assets/img/blow3.webp'}
        width={100}
        height={140}
        alt='grafity'
      />
      <Image
        className='absolute bottom-0 right-9  opacity-90 -hue-rotate-15  z-0 rotate-[23deg] '
        src={'/assets/img/blow3.webp'}
        width={140}
        height={140}
        alt='grafity'
      />
    </div>
  )
}

export default JinxShortInfo
