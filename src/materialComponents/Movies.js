// import { useMovies } from './context/Theme'
import Movie from './Movie'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import { useState, useEffect } from 'react'

const Movies = () => {
	// const { movies } = useMovies()
	const [movies, setMovies] = useState([])
	const getMovies = () => {
		fetch('https://6166c4e213aa1d00170a670e.mockapi.io/movies')
			.then((data) => data.json())
			.then((mvs) => setMovies([...mvs]))
	}
	useEffect(() => {
		getMovies()
	}, [])

	const deleteMovie = (id) => {
		fetch(`https://6166c4e213aa1d00170a670e.mockapi.io/movies/${id}`, {
			method: 'DELETE',
		}).then(() => getMovies())
	}
	return (
		<Paper
			sx={{
				width: '100%',
				display: 'grid',
				justifyContent: 'center',
				borderRadius: '0',
				paddingBottom: '2rem',
				minHeight: '100vh',
			}}
		>
			<Container
				sx={{
					display: 'grid',
					justifyItems: 'center',
					gridTemplateColumns: {
						xs: '1fr',
						md: 'repeat(2,minmax(min-content,450px))',
						lg: 'repeat(3,minmax(min-content,450px))',
					},
					gap: '2rem',
					borderRadius: 0,
				}}
			>
				{movies.map((movie, index) => (
					<Movie key={index} movie={movie} deleteFunction={deleteMovie} />
				))}
			</Container>
		</Paper>
	)
}

export default Movies
