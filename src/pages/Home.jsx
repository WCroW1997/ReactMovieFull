import HeroSlide from '../components/hero-slide/HeroSlide'
import MovieGrid from '../components/movie-grid/MovieGrid'

const homeInfo = [
	{
		title: 'Trending Movies',
		path: '/movie',
		cate: 'movie',
		type: 'popular',
	},
	{
		title: 'Top Rated Movies',
		path: '/movie',
		cate: 'movie',
		type: 'top_rated',
	},
	{
		title: 'Trending TV',
		path: '/tv',
		cate: 'tv',
		type: 'popular',
	},
	{
		title: 'Top Rated TV',
		path: '/tv',
		cate: 'tv',
		type: 'top_rated',
	},
]

const Home = () => {
	return (
		<div>
			<HeroSlide />
			<div className='container'>
				{homeInfo.map((el, id) => (
					<MovieGrid key={id} {...el}>
						{el.title}
					</MovieGrid>
				))}
			</div>
		</div>
	)
}

export default Home
