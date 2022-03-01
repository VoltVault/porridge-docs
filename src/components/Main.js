import './../styles/Main.css'
// import {
//     useRef
// } from 'react'

const Main = () => {
    return (
		<div className='container'>
			<main>
				<section>
					<h2>
						Ready to start with{' '}
						<span className='green-span'>Porridge.js</span>?
					</h2>
					<p>
						Porridge.js is <wbr />
						available for anyone, <wbr />
						and anyone can <wbr />
						contribute on{' '}
						<a
							href='https://github.com/voltvault/porridge/'
							target='_blank'
							rel='noopener noreferrer'
                        >
							Github.{' '}
						</a>
						<br />
					</p>
				</section>
			</main>
		</div>
	);
}

export default Main
