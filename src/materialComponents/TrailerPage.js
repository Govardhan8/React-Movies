import { useParams } from 'react-router-dom'
import { useMovies } from './context/Theme'
import Movie from './Movie'
import Container from '@mui/material/Container'

const TrailerPage = () => {
	const { id } = useParams()
	const { movies } = useMovies()

	const movie = movies.filter((m) => {
		if (m.id === id) {
			return m
		} else {
			return ''
		}
	})

	return (
		<>
			<Container
				sx={{
					padding: '1rem',
					display: 'grid',
					justifyItems: 'center',
					gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
					gap: '2rem',
				}}
			>
				<Movie movie={movie[0]} hide />
			</Container>
		</>
	)
}

export default TrailerPage
