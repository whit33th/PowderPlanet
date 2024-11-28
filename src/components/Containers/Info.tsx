import Image from 'next/image'
import React from 'react'

function Info() {
	return (

		<div className=' [mask-image:linear-gradient(360deg,#d9d9d9_70.62%,rgba(115,115,115,0)_100%)]' >
			<div className=' px-12 py-28  sm:px-24 sm:py-12  relative overflow-hidden'>
				<h2 className='z-10 text-center text-5xl  py-12'>Region:</h2>
				<div className='*:border *:border-[#262626] *:z-10 grid grid-cols-1 gap-12	  '>
					<div className=' h-[250px] rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380]  group	 '>

						<Image className='absolute top-0 left-0 z-0 object-fill object-center grayscale  rounded-xl  brightness-[0.45] h-full opacity-100   ' src={'/assets/img/zaunBg2.png'} width={1920} height={1080} alt="" />

						<Image className='group-hover:scale-110 transition-all duration-300 ease-in-out drop-shadow-2xl	 w-fit h-fit' src={'/assets/img/zaun_emblem.png'} width={100} height={100} alt="" />
						<p className='z-10  text-3xl text-[#66a832]'>Zaun</p>
					</div>

				</div>
				<h2 className=' z-10 text-center text-5xl py-12'>Weapons</h2>
				<div className={`
			grid
  grid-cols-1 md:grid-cols-2  lg:grid-cols-4
  gap-12 
  *:z-10 
  *:border 
  *:border-[#262626]
  place-items-center  *:h-[250px] *:w-[250px]`}

				>

					<div className='aspect-[4/3] rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380]'>
						<video
							className='  absolute top-0 left-0 z-0 object-cover object-center rounded-xl h-full transform transition-transform duration-300 ease-in-out  shadow-[inset_0_4px_6px_rgba(0,0,0,99.5)]'
							src="/assets/video/pow-pow.mp4"
							autoPlay
							loop
							muted
						></video>
						<Image className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] -hue-rotate-60 ' src={'/assets/img/blow3.webp'} width={160} height={140} alt="" />
						<Image className='absolute top-2/3 left-0 -translate-x-1/2 -translate-y-1/2  z-0 rotate-[60deg] -hue-rotate-90 ' src={'/assets/img/blow1.webp'} width={100} height={140} alt="" />
						<Image className='absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2  z-0 rotate-[60deg] -hue-rotate-90 ' src={'/assets/img/blow2.webp'} width={120} height={140} alt="" />
					</div>

					<div className=' rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380] 	 '>


						<video className='absolute top-0 left-0 z-0 object-cover object-center  rounded-xl  h-full transform transition-transform duration-300 ease-in-out ' src="/assets/video/chomper.mp4" autoPlay loop muted></video>
						<Image className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] ' src={'/assets/img/blow2.webp'} width={85} height={140} alt="" />
						<Image className='absolute top-0 left-0 -translate-x-1/2   z-0 ' src={'/assets/img/blow1.webp'} width={115} height={140} alt="" />

					</div>
					<div className='  rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#00000080] 	 '>


						<Image className=' transform transition-transform duration-300 ease-in-out  absolute top-0 left-0 z-0 object-cover object-center  rounded-xl  h-full w-full ' src="/assets/img/fishbones.jpg" alt='' width={250} height={250} />

						<Image className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  z-0 rotate-[20deg] -hue-rotate-90 ' src={'/assets/img/blow4.webp'} width={115} height={140} alt="" />
						<Image className='absolute top-2/3 left-0 -translate-x-1/2 -translate-y-1/2  z-0 rotate-[150deg] -hue-rotate-60 ' src={'/assets/img/blow2.webp'} width={90} height={140} alt="" />

					</div>
					<div className='  rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380] 	 '>


						<Image className='absolute top-0 left-0 z-0 object-cover object-center  rounded-xl  h-full w-full transform transition-transform duration-300 ease-in-out  ' src="/assets/img/sherif.jfif" alt='' width={250} height={250} />

						<Image className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] ' src={'/assets/img/heart.webp'} width={130} height={140} alt="" />
						<Image className='absolute top-2/3 right-1/2 -translate-x-1/3 -translate-y-1/2 -hue-rotate-180 z-0 rotate-[20deg] ' src={'/assets/img/blow1.webp'} width={155} height={140} alt="" />
						<Image className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  z-0 rotate-[40deg] ' src={'/assets/img/blow2.webp'} width={115} height={140} alt="" />

					</div>

				</div>


				<video
					className=' 
					[mask-image:linear-gradient(180deg,#d9d9d9_70.62%,rgba(115,115,115,0)_100%)]
					absolute top-0 left-0 z-0 object-cover object-center rounded-xl h-full  blur-[10px] -hue-rotate-[-80deg]	 opacity-15 '
					src="/assets/video/sky.mp4"
					autoPlay
					loop
					muted
					disablePictureInPicture
				></video>
			</div>
			
		</div>
	)
}

export default Info