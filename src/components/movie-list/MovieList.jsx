import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import MovieCard from '../movie-card/MovieCard'
import tmdbApi, { category } from '../../api/tmdbApi'

import './movie-list.scss'

const MovieList = (props) => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const getList = async () => {
			let resp = null
			const params = {}

			if (props.type !== 'similar') {
				switch (props.category) {
					case category.movie:
						resp = await tmdbApi.getMoviesList(props.type, { params })
						break
					default:
						resp = await tmdbApi.getTvList(props.type, { params })
				}
			} else {
				resp = await tmdbApi.similar(props.category, props.id)
			}
			setItems(resp.results)
		}
		getList()
	}, [props.id, props.type, props.category])

	return (
		<div className='movie-list'>
			<Swiper slidesPerView={'auto'} spaceBetween={10} grabCursor={true}>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<MovieCard {...item} category={props.category} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MovieList
