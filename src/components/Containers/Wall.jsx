import Image from 'next/image'
import React from 'react'

function Wall() {
	return (
		<div className=' h-5 md:h-64 relative [mask-image:linear-gradient(360deg,#d9d9d9_70.62%,rgba(115,115,115,0.3)_100%)] border-[#21231C] border-y  wall'>
			<Image className='absolute inset-0 w-full h-full border-[#21231C] border-y   object-cover object-center  z-[-1]  [mask-image:linear-gradient(180deg,#d9d9d9_70.62%,rgba(115,115,115,0.3)_100%)]' src='/assets/img/wallScreen2.png' width={1980} height={1080} alt='mostWanted' />
		</div>
	)
}

export default Wall