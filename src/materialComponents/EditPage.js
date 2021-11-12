import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useMovies } from './context/Theme'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const EditPage = () => {
	const { id } = useParams()
	const { movies, setMovies } = useMovies()
	const movie = movies.filter((m) => m.name === id)
	const [newname, setName] = useState(movie[0].name)
	const [rating, setRating] = useState(movie[0].rating)
	const [poster, setPoster] = useState(movie[0].poster)
	const [summary, setSummary] = useState(movie[0].summary)
	const [trailer, setTrailer] = useState(movie[0].trailer)

	const history = useHistory()
	const handleClick = (mov) => {
		const newMovies = [...movies]
		newMovies[movie[0].id - 1] = mov
		setMovies([...newMovies])
		history.push('/')
	}

	return (
		<Paper
			sx={{
				display: 'grid',
				gridTemplateColumns: '1fr',
				minHeight: '100vh',
				borderRadius: 0,
				justifyItems: 'center',
				padding: '1rem',
			}}
		>
			<Box
				sx={{
					display: 'grid',
					width: '90%',
				}}
			>
				<TextField
					id='standard-basic'
					label='Movie Name*'
					variant='standard'
					onChange={(e) => setName(e.target.value)}
					placeholder='Enter the Name'
					value={newname}
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
				<TextField
					id='standard-basic'
					label='Movie Trailer*'
					variant='standard'
					onChange={(e) => setTrailer(e.target.value)}
					placeholder='Enter Trailer'
					value={trailer}
				/>
			</Box>
			<Box
				sx={{
					display: 'grid',
					width: '90%',
					padding: '0.5rem 0',
				}}
			>
				<Button
					variant='contained'
					onClick={() => {
						handleClick({
							name: newname,
							poster,
							rating,
							summary,
							trailer,
						})
					}}
				>
					Save
				</Button>
			</Box>
		</Paper>
	)
}

export default EditPage
