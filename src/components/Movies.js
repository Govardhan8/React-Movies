import { Movie } from './Movie'
import { useTheme, useMovies } from './context/Theme'
import Like from './Like'
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const Movies = () => {
	const { theme } = useTheme()
	const { movies, setMovies } = useMovies()
	const deleteMovie = (name) => {
		console.log('deleting', name)
		const newMovies = movies.filter((m) => m.name !== name)
		setMovies([...newMovies])
	}
	const history = useHistory()
	return (
		<>
			<section
				className='container'
				style={{ background: !theme ? '#0a1929' : 'white' }}
			>
				<article className='app'>
					{movies.map(({ name, poster, rating, summary, index }) => (
						<div key={name}>
							<Movie
								name={name}
								url={poster}
								rating={rating}
								summary={summary}
							/>
							<div className='buttonList'>
								<Like />
								<div className='space'>
									<DeleteIcon
										onClick={() => {
											deleteMovie(name)
										}}
									/>
									<EditIcon
										onClick={() => {
											history.push('/edit/' + name)
										}}
									/>
								</div>
							</div>
						</div>
					))}
				</article>
			</section>
		</>
	)
}

export default Movies
