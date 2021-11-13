import { useParams } from 'react-router-dom'
import { useMovies } from './context/Theme'
import Movie from './Movie'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

const TrailerPage = () => {
	const { id } = useParams()
	const { movies } = useMovies()
	console.log(movies)
	const movie = movies.filter((m) => {
		if (m.id === id) {
			return m
		} else {
			return ''
		}
	})

	return (
		<>
			<Paper
				sx={{
					width: '100vw',
					display: 'grid',
					justifyContent: 'center',
					minHeight: '100vh',
				}}
			>
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '1rem',
						width: '100vw',
					}}
				>
					<Movie movie={movie[0]} hide />
				</Container>
			</Paper>
		</>
	)
}

export default TrailerPage
