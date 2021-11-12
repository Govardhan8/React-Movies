import { useMovies } from './context/Theme'
import Movie from './Movie'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

const Movies = () => {
	const { movies } = useMovies()
	return (
		<Container>
			<Paper
				sx={{
					padding: '1rem',
					display: 'grid',
					justifyItems: 'center',
					gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
					gap: '2rem',
					borderRadius: 0,
				}}
			>
				{movies.map((movie, index) => (
					<Movie key={index} movie={movie} />
				))}
			</Paper>
		</Container>
	)
}

export default Movies
