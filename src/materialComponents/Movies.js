import { useMovies } from './context/Theme'
import Movie from './Movie'
import Paper from '@mui/material/Paper'

const Movies = () => {
	const { movies } = useMovies()
	return (
		<>
			<Paper
				sx={{
					padding: '1rem',
					display: 'grid',
					justifyItems: 'center',
					gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
					gap: '2rem',
					borderRadius: 0,
				}}
			>
				{movies.map((movie, index) => (
					<Movie key={index} movie={movie} />
				))}
			</Paper>
		</>
	)
}

export default Movies
