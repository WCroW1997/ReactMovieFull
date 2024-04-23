import { useParams } from 'react-router-dom'

import PageHeader from '../components/page-header/PageHeader'

import { category as cate } from '../api/tmdbApi'
import MovieZone from '../components/movie-zone/MovieZone'
const Catalog = () => {
	const { category } = useParams()

	return (
		<div>
			<PageHeader>
				{category === cate.movie ? 'Movies' : 'TV Series'}
			</PageHeader>
			<div className='container'>
				<div className='section mb-3'>
					<MovieZone category={category} />
				</div>
			</div>
		</div>
	)
}

export default Catalog
