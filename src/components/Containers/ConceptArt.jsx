import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'

export default function ConceptArt() {
	const conceptArts = [
		{ src: '/assets/img/Concept/Concept.png', title: 'Concept Art 1', description: 'Dynamic and explosive design!' },
		{ src: '/assets/img/jinx5.png', title: 'Concept Art 2', description: 'A chaotic masterpiece of creativity.' },
		{ src: '/assets/img/jinx3.png', title: 'Concept Art 3', description: 'Colorful and full of energy.' },
	]

	return (
		<div className="relative min-h-screen text-white flex flex-col items-center justify-center">
			<h1 className="math-auto text-4xl md:text-6xl font-bold neon-text mb-8 text-center " 	 >
				<span>Grade-</span><span className='text-pink-500'>A</span> 
				<span className='text-blue-600'>r</span> 
				<span className='text-green-600'>t</span> <span>Gallery</span>
			</h1>
			<div className="w-full max-w-4xl px-4  ">
				<Swiper
					
					grabCursor
					centeredSlides
					slidesPerView="auto"
					coverflowEffect={{
						rotate: 30,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					pagination={{ type: 'fraction', clickable: true }}
					
					className="jinx-swiper"
				>
					{conceptArts.map((art, index) => (
						<SwiperSlide
							key={index}
							className="bg-black  shadow-xl relative aspect-video rounded-sm "
						>
							<Image
								src={art.src}
								alt={art.title}
								className=" object-cover h-full rounded-sm "
								width={1920}
								height={1080}
							/>
							<div className="mt-4 text-center">
								<h2 className="text-2xl font-bold">{art.title}</h2>
								<p className="text-sm text-gray-300">{art.description}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>


	
		</div>
	)
}
