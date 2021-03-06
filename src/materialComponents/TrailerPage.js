import { useParams } from 'react-router-dom'
// import { useMovies } from './context/Theme'
import Movie from './Movie'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import { Api_url } from '../App.js'
const TrailerPage = () => {
	const { id } = useParams()
	// const { movies } = useMovies()
	// console.log(movies)
	// const movie = movies.filter((m) => {
	// 	if (m.id === id) {
	// 		return m
	// 	} else {
	// 		return ''
	// 	}
	// })
	const [movie, setMovie] = useState({})
	useEffect(() => {
		fetch(`${Api_url}/movies/${id}`)
			.then((data) => data.json())
			.then((mv) => setMovie(mv))
	}, [id])

	return (
		<>
			<Paper
				sx={{
					width: '100%',
					display: 'grid',
					alignItems: 'start',
					minHeight: '100vh',
				}}
			>
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '1rem',
						width: '100%',
					}}
				>
					<Movie movie={movie} hide />
				</Container>
			</Paper>
		</>
	)
}

export default TrailerPage
