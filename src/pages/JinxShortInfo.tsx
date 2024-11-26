import Image from 'next/image'
import React from 'react'


function JinxShortInfo() {
	return (
		<div className='w-full min-h-[100vh] overflow-hidden    relative mask-image: linear-gradient(180deg, #d9d9d9 70.62%, rgba(115, 115, 115, 0) 100%), linear-gradient(0deg, #d9d9d9 70.62%, rgba(115, 115, 115, 0) 100%);   '>
			<Image className='absolute top-0 left-0 z-0 blur-[4px] opacity-5 object-cover object-center w-full h-full' width={1920} height={1080} src={'/assets/img/CoolBack.webp'} alt='' />
			<div className="px-36 py-32 h-full w-full relative  ">
				<div>
					<div><Image
						className="absolute top-12 -left-4 -hue-rotate-120 -translate-y-8 shadow-sm animate-fadeCycle opacity-20 rotate-2 z-0"
						style={{ animationDelay: "0s" }}
						width={200}
						height={100}
						src="/assets/img/JinxMonkeyGrafity2.webp"
						alt=""
					/>
						<Image
							className="absolute top-18 left-12 -hue-rotate-30 -translate-y-8 shadow-sm animate-fadeCycle opacity-40 -rotate-2 z-0"
							style={{ animationDelay: "2s" }}
							width={200}
							height={100}
							src="/assets/img/JinxMonkeyGrafity2.webp"
							alt=""
						/>
						<Image
							className="absolute top-20 left-20 -translate-y-8 shadow-sm animate-fadeCycle opacity-45 -rotate-14 backdrop-blur-sm transform scale-x-[-1] z-0"
							style={{ animationDelay: "4s" }}
							width={200}
							height={100}
							src="/assets/img/JinxMonkeyGrafity2.webp"
							alt=""
						/></div>
				</div>
				<div className='flex  gap-4  '>
					<div className=' flex-1 z-10 gap-4 flex flex-col '>
						<p className="text-6xl  ">The Loose<br /> <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#de59ea] via-[#59cfea] to-[#9859ea]'>Cannon</span></p>
						<p className="text-2xl  text-[#cd4574] ">Volatile explosives are a girl’s best friend!</p>
						<div className='relative'>

							<p className="max-w-2xl relative text-sm font-mono bg-[#18181899] p-4 rounded-xl border-[1px] border-[#262626]">
								A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences.
								With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a
								trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand
								of pandemonium wherever she goes.
							</p>
							<Image className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2   z-0 rotate-[20deg]' src={'/assets/img/blow2.webp'} width={60} height={40} alt="" />
							<Image className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] ' src={'/assets/img/blow4.webp'} width={40} height={40} alt="" />
						</div>

					</div>

					<div className=' flex-1 flex justify-center items-center relative'>
						<div className='relative'>
							<video className='
                w-[350px] h-[350px] rounded-full
    object-cover 
    object-center z-10 border-8 border-pink-500
  "' disablePictureInPicture preload="auto" autoPlay playsInline loop muted>
								<source src="/assets/video/JinxAvatar.mp4" type="video/mp4" />
							</video>
							
						</div>


						<video className='
                w-[400px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 extra blur-[10px] z-0 rounded-full opacity-50
    object-cover
    object-center
  "' disablePictureInPicture preload="auto" autoPlay playsInline loop muted>
							<source src="/assets/video/JinxAvatar.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
			<Image className='absolute bottom-1 right-0  z-0 rotate-[20deg] ' src={'/assets/img/blow3.webp'} width={115} height={140} alt="" />
			<Image className='absolute bottom-12 right-6  z-0 rotate-[16deg] -hue-rotate-30 ' src={'/assets/img/blow3.webp'} width={100} height={140} alt="" />
			<Image className='absolute bottom-0 right-9  opacity-90 -hue-rotate-15  z-0 rotate-[23deg] ' src={'/assets/img/blow3.webp'} width={140} height={140} alt="" />
		</div>
	)
}

export default JinxShortInfo