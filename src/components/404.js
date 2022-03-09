export const Error404 = () => {
    return (
		<div className='container'>
			<main>
				<section>
					<h2>
						<span className='green-span'>404</span>, Page not
						found...
					</h2>
					<p>
						Looks like the page you requested was not found on our
						servers. <br /> <br />
						If you found a broken link you can tell us at{' '}
						<a href='mailto://jacobaleger12@gmail.com'>
							jacobalger12@gmail.com
						</a>
						, or at our official{' '}
						<a href='https://github.com/VoltVault/porridge/issues/'>
							Github
						</a>{' '}
						errors page. <br /> <br />
						You can go to our <a href='/'>homepage</a>, or our{' '}
						official<a href='/docs/'> documentation</a>.
						<br />
					</p>
				</section>
			</main>
		</div>
	);
}

export default Error404;
