import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './hero-slide.scss'
import 'swiper/css'

import Button, { OutlineButton } from '../button/Button'
import Modal, { ModalContent } from '../modal/Modal'

import tmdbApi, { category, movieType } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

const HeroSlide = () => {
	const [movieItems, setMovieItems] = useState([])

	useEffect(() => {
		const getMovies = async () => {
			const params = { page: 1 }
			try {
				const resp = await tmdbApi.getMoviesList(movieType.popular, { params })
				setMovieItems(resp.results.slice(0, 5))
			} catch (error) {
				console.log(error)
			}
		}
		getMovies()
	}, [])

	return (
		<div className='hero-slide'>
			<Swiper
				modules={[Autoplay]}
				slidesPerView={1}
				spaceBetween={0}
				grabCursor={true}
				autoplay={{ delay: 15000 }}
			>
				{movieItems.map((item, id) => (
					<SwiperSlide key={id} className='slide'>
						{({ isActive }) => (
							<HeroSlideItem
								className={`${isActive ? 'active' : ''}`}
								{...item}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			{movieItems.map((item, i) => (
				<TrailerModal id={item.id} key={i} />
			))}
		</div>
	)
}

const HeroSlideItem = (props) => {
	const { id, title, overview, poster_path, backdrop_path, className } = props

	const history = useNavigate()

	const background = apiConfig.originalImage(
		backdrop_path ? backdrop_path : poster_path
	)

	const setModalActive = async () => {
		const modal = document.querySelector(`#modal_${id}`)

		const video = await tmdbApi.getVideos(category.movie, id)

		if (video.results.length > 0) {
			const videoSrc = 'https://www.youtube.com/embed/' + video.results[0].key
			modal
				.querySelector('.modal__content > iframe')
				.setAttribute('src', videoSrc)
		} else {
			modal.querySelector('.modal__content').innerHTML = 'No trailer'
		}

		modal.classList.toggle('active')
	}

	return (
		<div
			className={`hero-slide__item ${className}`}
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className='hero-slide__item__content container'>
				<div className='hero-slide__item__content__info'>
					<h2 className='title'>{title}</h2>
					<div className='overview'>{overview}</div>
					<div className='btns'>
						<Button onClick={() => history('/movie/' + id)}>Watch now</Button>
						<OutlineButton onClick={setModalActive}>
							Watch trailer
						</OutlineButton>
					</div>
				</div>
				<div className='hero-slide__item__content__poster'>
					<img src={apiConfig.w500Image(poster_path)} alt='' />
				</div>
			</div>
		</div>
	)
}

export const TrailerModal = ({ id }) => {
	const iframeRef = useRef(null)

	const onClose = () => iframeRef.current.setAttribute('src', '')
	return (
		<Modal active={false} id={`modal_${id}`}>
			<ModalContent onClose={onClose}>
				<iframe
					ref={iframeRef}
					width='100%'
					height='500px'
					title='trailer'
				></iframe>
			</ModalContent>
		</Modal>
	)
}

export default HeroSlide
