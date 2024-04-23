import { SiThemoviedatabase } from 'react-icons/si'
import './header.scss'
import { NavLink } from 'react-router-dom'

const headerNav = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Movies',
		path: '/movie',
	},
	{
		title: 'TV Series',
		path: '/tv',
	},
]

const Header = () => {
	return (
		<header className='header'>
			<div className='container header__wrap'>
				<div className='logo'>
					<SiThemoviedatabase size={42} className='logo__img' />
					<a href='#'>React Movies</a>
				</div>
				<ul className='header__nav'>
					{headerNav.map((el, id) => (
						<li key={id} className=''>
							<NavLink to={el.path}>{el.title}</NavLink>
						</li>
					))}
				</ul>
			</div>
		</header>
	)
}

export default Header
