import { Link } from 'react-router-dom'
import { OutlineButton } from '../button/Button'
import MovieList from '../movie-list/MovieList'

import { category, movieType, tvType } from '../../api/tmdbApi'

const MovieGrid = ({ children, path, cate, type }) => {
	const trueCategory = category[cate]

	let trueType = ''
	const choosetype = () => {
		cate === 'movie' ? (trueType = movieType[type]) : (trueType = tvType[type])
		return trueType
	}
	choosetype()
	return (
		<div className='section mb-3'>
			<header className='section__header mb-2'>
				<h2>{children}</h2>
				<Link to={path}>
					<OutlineButton className='small'>View more</OutlineButton>
				</Link>
			</header>
			<MovieList category={trueCategory} type={trueType} />
		</div>
	)
}

export default MovieGrid
