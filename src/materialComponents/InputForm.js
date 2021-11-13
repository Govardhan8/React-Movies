import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useMovies } from './context/Theme'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useHistory } from 'react-router-dom'

const InputForm = () => {
	const [name, setName] = useState('')
	const [rating, setRating] = useState('')
	const [poster, setPoster] = useState('')
	const [summary, setSummary] = useState('')
	const [trailer, setTrailer] = useState('')
	const { movies, setMovies } = useMovies()
	const history = useHistory()

	const handleClick = (mov) => {
		mov.id = movies.length + 1
		setMovies([...movies, mov])
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
			}}
		>
			<Box
				sx={{
					display: 'grid',
					width: '90%',
					maxWidth: '30rem',
				}}
			>
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
				<TextField
					id='standard-basic'
					label='Movie trailer*'
					variant='standard'
					onChange={(e) => setTrailer(e.target.value)}
					placeholder='Enter trailer'
					value={trailer}
				/>
			</Box>
			<Box
				sx={{
					display: 'grid',
					width: '90%',
					padding: '1rem 0',
					maxWidth: '30rem',
				}}
			>
				<Button
					sx={{
						width: '100%',
						height: '4rem',
					}}
					variant='contained'
					onClick={() => {
						setName('')
						setRating('')
						setPoster('')
						setSummary('')
						setTrailer('')
						handleClick({
							name,
							poster,
							rating,
							summary,
							trailer,
						})
					}}
				>
					Add Movie
				</Button>
			</Box>
		</Paper>
	)
}

export default InputForm
