import Image from 'next/image'
import React from 'react'

function WeaponsDemo() {
	return (
		<div className='min-h-screen relative [mask-image:linear-gradient(360deg,#d9d9d9_70.62%,rgba(115,115,115,0)_100%)]'>
			
			<div>
				
			</div>
			
			<Image className='absolute object-cover object-left top-0 left-0 w-full h-full  [mask-image:linear-gradient(180deg,#d9d9d9_70.62%,rgba(115,115,115,0)_100%)] z-[-1] opacity-75' src={'/assets/img/shooting_gallery.png'} width={1920} height={1050} alt="shooting gallery" />


		</div>
	)
}

export default WeaponsDemo