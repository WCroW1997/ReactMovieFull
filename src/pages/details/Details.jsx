import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

import './details.scss'
import CastList from './CastList'
import VideoList from './VideoList'
import MovieList from '../../components/movie-list/MovieList'

const Details = () => {
	const [item, setItem] = useState(null)

	const { category, id } = useParams()

	useEffect(() => {
		const getDetail = async () => {
			const resp = await tmdbApi.detail(category, id, { params: {} })
			setItem(resp)
			window.scrollTo(0, 0)
		}
		getDetail()
	}, [category, id])
	return (
		<>
			{item && (
				<>
					<div
						className='banner'
						style={{
							backgroundImage: `url(${apiConfig.originalImage(
								item.backdrop_path || item.poster_path
							)})`,
						}}
					></div>
					<div className='mb-3 movie-content container'>
						<div className='movie-content__poster'>
							<div
								className='movie-content__poster__img'
								style={{
									backgroundImage: `url(${apiConfig.originalImage(
										item.poster_path || item.backdrop_path
									)})`,
								}}
							></div>
						</div>
						<div className='movie-content__info'>
							<h1 className='title'>{item.title || item.name}</h1>
							<div className='genres'>
								{item.genres.map((genre, id) => (
									<span key={id} className='genres__item'>
										{genre.name}
									</span>
								))}
							</div>
							<p className='overview'>{item.overview}</p>
							<div className='cast'>
								<h2 className='section__header'>Cast</h2>
								<CastList id={item.id} />
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='section mb-3'>
							<VideoList id={item.id} />
						</div>
						<div className='section mb-3'>
							<h2 className='section__header mb-2'>Similar</h2>
							<MovieList category={category} type='similar' id={item.id} />
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Details
