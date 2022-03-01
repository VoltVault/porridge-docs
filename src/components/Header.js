import './../styles/Header.css'
import Hamburger from 'hamburger-react'
import { useRef } from 'react'

const Header = () => {
	const navbarHidden = useRef(null)

    return (
		<>
			<header className='header' role='banner'>
				<h1
					className='logo'
					aria-label='Our logo, click to go to the homepage'
					title='The logo'>
					<a href='/'>Porridge.js</a>
				</h1>

				<nav role='menubar' className='navbar-show'>
					<ul role='menu'>
						<li>
							<a href='/' title='A link to the home page'>
								Home
							</a>
						</li>
						<li>
							<a
								href='/docs/'
								title='A link to the documentation'>
								Docs
							</a>
						</li>
					</ul>
				</nav>
				<Hamburger
					color='#d1a0ff'
					direction='right'
					duration={0.64}
					onToggle={(toggle) => {
						if (toggle) {
							navbarHidden.current.style.transformOrigin = 'right';
						} else {
							navbarHidden.current.style.transformOrigin = 'left'
						}

						navbarHidden.current.classList.toggle(
							'showed'
						);
					}}
				/>
			</header>
			<nav role='menubar' className="navbar-hidden" ref={navbarHidden}>
				<ul role='menu'>
					<li>
						<a href='/' title='A link to the home page'>
							Home
						</a>
					</li>
					<li>
						<a href='/docs/' title='A link to the documentation'>
							Docs
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Header
