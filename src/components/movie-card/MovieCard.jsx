import { Link } from 'react-router-dom'
import { BiPlay } from 'react-icons/bi'

import Button from '../button/Button'

import { category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

import './movie-card.scss'

const MovieCard = (props) => {
	const link = '/' + category[props.category] + '/' + props.id

	const bg = apiConfig.w500Image(props.poster_path || props.backdrop_path)
	return (
		<Link to={link}>
			<div className='movie__card' style={{ backgroundImage: `url(${bg})` }}>
				<Button>
					<BiPlay />
				</Button>
			</div>
			<h3>{props.title || props.name}</h3>
		</Link>
	)
}

export default MovieCard
