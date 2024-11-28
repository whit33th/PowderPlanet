import Image from 'next/image'
import React from 'react'

function FullScreenGrafity() {
	return (
		<div className='absolute top-0 left-0 w-full h-full z-[-1] overflow-x-clip'>


			
			
			<Image
				className="absolute top-[45%] -translate-y-full left-[40%] -translate-x-1/2 opacity-30 z-0 rotate-[50deg] blur-[1px]"
				width={200}
				height={100}
				src="/assets/img/yay.gif"
				alt=""
			/>
			
			<Image
				className="absolute top-[15%] -translate-y-full left-[43%] -translate-x-1/2 opacity-30 z-0 rotate-[150deg] blur-[3px]"
				width={200}
				height={100}
				src="/assets/img/cool.gif"
				alt=""
			/>
			<Image
				className="absolute top-[32%] -translate-y-full left-[30%] -translate-x-1/2 opacity-30 z-0 rotate-[-80deg] -hue-rotate-[120deg] blur-[1px]"
				width={110}
				height={100}
				src="/assets/img/cool.gif"
				alt=""
			/>
			<Image
				className="absolute top-[5%] -translate-y-1/2 left-[57%] -translate-x-1/2 opacity-30 z-0 rotate-[30deg] -hue-rotate-180 blur-[4px]"
				width={200}
				height={100}
				src="/assets/img/boom.gif"
				alt=""
			/>
			<Image
				className="absolute bottom-[0%]  left-[65%] -translate-x-1/2 opacity-30 z-0 rotate-[-30deg] blur-[2px]"
				width={300}
				height={100}
				src="/assets/img/cool.gif"
				alt=""
			/>


			
			
			

			<Image
				className="absolute top-[42%] -translate-y-full left-[11%] -translate-x-1/2 opacity-30 z-0 -hue-rotate-[-25deg] rotate-[-140deg] blur-[5px] "
				width={190}
				height={100}
				src="/assets/img/yay.gif"
				alt=""
			/>
			<Image
				className="absolute top-[42%] -translate-y-full left-[11%] -translate-x-1/2 opacity-30 z-0 -hue-rotate-[-25deg] rotate-[-140deg] blur-[10px] "
				width={390}
				height={100}
				src="/assets/img/yay.gif"
				alt=""
			/>
			<Image
				className="absolute top-[75%] -translate-y-full right-[0%] -translate-x-1/2 opacity-30 z-0 -hue-rotate-[-210deg] rotate-[-80deg] blur-[2px] "
				width={300}
				height={100}
				src="/assets/img/yay.gif"
				alt=""
			/>
				
			<Image
				className="absolute top-[-10%]  left-[60%] -translate-x-1/2 opacity-30 z-0 rotate-[deg] -hue-rotate-[-60deg] blur-[3px]"
				width={320}
				height={100}
				src="/assets/img/cool.gif"
				alt=""
			/>
			<Image
				className="absolute bottom-[0%]  left-[0%] -translate-x-1/2 opacity-30 z-0 rotate-[30deg] -hue-rotate-[-60deg] blur-[7px]"
				width={500}
				height={100}
				src="/assets/img/cool.gif"
				alt=""
			/>


			<Image
				className="absolute top-[-20%]   left-[10%]  opacity-30 z-0 rotate-[-183deg] -hue-rotate-[-120deg] blur-[8px]"
				width={400}
				height={200}
				src="/assets/img/boom.gif"
				alt=""
			/>

			<Image
				className="absolute top-[25%]  left-[11%] opacity-35 z-0 rotate-[-72deg] -hue-rotate-[180deg] blur-[3px]"
				width={300}
				height={100}
				src="/assets/img/what.gif"
				alt=""
			/>
			</div>
	)
}

export default FullScreenGrafity