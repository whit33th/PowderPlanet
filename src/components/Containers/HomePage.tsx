'use client'

import HalfScreenGrafity from '@/components/Containers/HalfScreanGrafity'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

function HomePage () {
  const [musicStatus, setMusicStatus] = useState(false)
  const [rotation, setRotation] = useState(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const audioSourceRef = useRef<HTMLAudioElement | null>(null)
  const maxVolume = 0.2
  useEffect(() => {
    let animationFrameId: number

    const rotate = () => {
      setRotation(prev => (prev + 1) % 360)
      animationFrameId = requestAnimationFrame(rotate)
    }

    if (musicStatus) {
      animationFrameId = requestAnimationFrame(rotate)
    }

    return () => cancelAnimationFrame(animationFrameId)
  }, [musicStatus])

  const playMusic = async () => {
    if (!audioContextRef.current) {
      const audioContext = new AudioContext()
      const gainNode = audioContext.createGain()
      const audioElement = new Audio('/assets/audio/music.mp3')
      const source = audioContext.createMediaElementSource(audioElement)

      source.connect(gainNode).connect(audioContext.destination)

      audioContextRef.current = audioContext
      gainNodeRef.current = gainNode
      audioSourceRef.current = audioElement

      audioElement.loop = true
    }

    const audioContext = audioContextRef.current!
    const gainNode = gainNodeRef.current!
    const audioElement = audioSourceRef.current!

    if (musicStatus) {
      const currentTime = audioContext.currentTime
      gainNode.gain.setValueAtTime(gainNode.gain.value, currentTime)
      gainNode.gain.linearRampToValueAtTime(0, currentTime + 0.5) // Плавное уменьшение до 0
      setTimeout(() => {
        audioElement.pause()
        setMusicStatus(false)
      }, 500)
    } else {
      audioElement.play()
      const currentTime = audioContext.currentTime
      gainNode.gain.setValueAtTime(0, currentTime)
      gainNode.gain.linearRampToValueAtTime(maxVolume, currentTime + 1) // Увеличение до maxVolume
      setMusicStatus(true)
    }
  }

  return (
    <div className='relative w-full min-h-[100vh] overflow-hidden [mask-image:linear-gradient(180deg,#d9d9d9_70.62%,rgba(115,115,115,0)_100%)] '>
      <div>
        <div
          onClick={playMusic}
          className='shadow-xl border-8 border-[#2E4630] rounded-full absolute top-4 left-4 z-50 active:scale-105 hover:opacity-80 cursor-pointer transition'
        >
          <Image
            className='opacity-70'
            style={{
              transform: `rotate(${rotation}deg)`
            }}
            width={75}
            height={75}
            src='/assets/img/vinyl.png'
            alt='Vinyl'
          />
        </div>
        <Image
          className={`absolute top-1 left-1 ${
            musicStatus ? 'opacity-70' : 'opacity-45'
          } transition`}
          width={20}
          height={20}
          src='/assets/img/note.png'
          alt='Vinyl'
        />
        <Image
          className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-90 active:scale-105 z-20  md:w-[500px] w-96 '
          width={500}
          height={100}
          src='/assets/img/JinxNameGrafity.png'
          alt=''
        />
        <Image
          className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 z-10  '
          width={800}
          height={100}
          src='/assets/img/boom.gif'
          alt=''
        />
        <HalfScreenGrafity />
      </div>

      <video
        className='
			 w-screen
   		 h-screen
   		 object-cover
   		 absolute
  		  top-0
   		 left-0
   		 blur-[12px]
			opacity-25 z-10
   		 object-center
   		 
    [aspect-ratio:16/9]
  "'
        disablePictureInPicture
        preload='auto'
        autoPlay
        playsInline
        loop
        muted
      >
        <source src='/assets/video/JinxBackground.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default HomePage
