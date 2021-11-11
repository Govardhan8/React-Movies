import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { StyleComponent, useMovies } from './context/Theme'

const EditPage = () => {
	const params = useParams()
	const { movies, setMovies } = useMovies()
	const movie = movies.reduce((m) => {
		if (m.name === params.name) {
			return m
		}
	})
	const [name, setName] = useState(movie.name)
	const [rating, setRating] = useState(movie.rating)
	const [poster, setPoster] = useState(movie.poster)
	const [summary, setSummary] = useState(movie.summary)
	const history = useHistory()
	const handleClick = (mov) => {
		const newMovies = [...movies]
		newMovies[movie.id - 1] = mov
		setMovies([...newMovies])
		history.push('/')
	}

	return (
		<div className='inputContainer' style={StyleComponent()}>
			<div className='inputs'>
				<TextField
					id='standard-basic'
					label='Movie Name*'
					variant='standard'
					onChange={(e) => setName(e.target.value)}
					placeholder='Enter the Name'
					value={name}
				/>
				<TextField
					id='standard-basic'
					label='Movie rating*'
					variant='standard'
					onChange={(e) => setRating(e.target.value)}
					placeholder='Enter rating'
					value={rating}
				/>
				<TextField
					id='standard-basic'
					label='Movie Poster*'
					variant='standard'
					onChange={(e) => setPoster(e.target.value)}
					placeholder='Enter poster url'
					value={poster}
				/>
				<TextField
					id='standard-basic'
					label='Movie Summary*'
					variant='standard'
					onChange={(e) => setSummary(e.target.value)}
					placeholder='Enter summary'
					value={summary}
				/>
			</div>

			<Button
				variant='contained'
				onClick={() => {
					setName('')
					setRating('')
					setPoster('')
					setSummary('')
					handleClick({
						name,
						poster,
						rating,
						summary,
					})
				}}
			>
				Save
			</Button>
		</div>
	)
}

export default EditPage
