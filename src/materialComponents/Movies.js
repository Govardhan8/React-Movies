import { useMovies } from './context/Theme'
import Movie from './Movie'
import Container from '@mui/material/Container'

const Movies = () => {
	const { movies } = useMovies()
	return (
		<>
			<Container
				sx={{
					display: 'grid',
					justifyItems: 'center',
					gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
					gap: '2rem',
				}}
			>
				{movies.map((movie, index) => (
					<Movie key={index} movie={movie} />
				))}
			</Container>
		</>
	)
}

export default Movies
