import { Movie } from './Movie'
import movies from './moviesData'
import { useState } from 'react'
import InputForm from './InputForm'

const Movies = () => {
	const [moviesList, setMoviesList] = useState([...movies])
	const handleClick = (mov) => {
		setMoviesList([...moviesList, mov])
	}
	return (
		<>
			<nav className='navbar'>
				<h1 className='header'>Avengers Movies</h1>
			</nav>
			<section className='container'>
				<InputForm handleClick={handleClick} />
				<article className='app'>
					{moviesList.map(({ name, poster, rating, summary }) => (
						<Movie
							key={name}
							name={name}
							url={poster}
							rating={rating}
							summary={summary}
						/>
					))}
				</article>
			</section>
		</>
	)
}

export default Movies
