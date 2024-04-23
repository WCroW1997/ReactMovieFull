import { SiThemoviedatabase } from 'react-icons/si'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__content container'>
				<div className='footer__logo'>
					<div className='logo'>
						<SiThemoviedatabase size={42} className='logo__img' />
						<a href='#'>React Movies</a>
					</div>
				</div>
				<div className='footer__menus'>
					<ul className='footer__menu'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/'>Contact us</Link>
						</li>
						<li>
							<Link to='/'>Term of services</Link>
						</li>
						<li>
							<Link to='/'>About us</Link>
						</li>
					</ul>
					<ul className='footer__menu'>
						<li>
							<Link to='/'>Live</Link>
						</li>
						<li>
							<Link to='/'>FAQ</Link>
						</li>
						<li>
							<Link to='/'>Premium</Link>
						</li>
						<li>
							<Link to='/'>Privacy policy</Link>
						</li>
					</ul>
					<ul className='footer__menu'>
						<li>
							<Link to='/'>You must watch</Link>
						</li>
						<li>
							<Link to='/'>Recent release</Link>
						</li>
						<li>
							<Link to='/'>Top IMDB</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
