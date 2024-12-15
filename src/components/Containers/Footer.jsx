import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
	return (
		<div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 p-12'>

			<h1 className='sm:text-7xl text-5xl '>Whit33th</h1>
			<div className='flex flex-col gap-4  justify-between '>
				<div className='flex justify-center sm:justify-end gap-1 '>
					<Link className='hover:opacity-80 transition-all duration-300 ease-in-out' href={'https://t.me/whit33th'}>
						<Image className='invert' src={'/assets/icons/telegram.svg'} width={30} height={30} alt="logo" />
					</Link>
				</div>
				<p className='text-sm text-end'>All rights reserved © 2025</p>
			</div>


		</div>
	)
}

export default Footer