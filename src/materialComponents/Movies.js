import { useMovies } from './context/Theme'
import Movie from './Movie'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

const Movies = () => {
	const { movies } = useMovies()
	console.log(movies)
	return (
		<Paper
			sx={{
				width: '100%',
				display: 'grid',
				justifyContent: 'center',
			}}
		>
			<Container
				sx={{
					padding: '1rem',
					display: 'grid',
					justifyItems: 'center',
					gridTemplateColumns: {
						xs: '1fr',
						md: 'repeat(2,minmax(min-content,450px))',
						lg: 'repeat(3,minmax(min-content,450px))',
					},
					gap: '3rem 2rem',
					borderRadius: 0,
				}}
			>
				{movies.map((movie, index) => (
					<Movie key={index} movie={movie} />
				))}
			</Container>
		</Paper>
	)
}

export default Movies
