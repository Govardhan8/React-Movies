import { Button, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import { useMovies } from './context/Theme'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const EditPage = () => {
	const { id } = useParams()
	// const { movies, setMovies } = useMovies()
	// const movie = movies.filter((m) => m.name === id)
	// console.log(id)

	const [name, setName] = useState('')
	const [rating, setRating] = useState('')
	const [poster, setPoster] = useState('')
	const [summary, setSummary] = useState('')
	const [trailer, setTrailer] = useState('')
	useEffect(() => {
		fetch(`https://6166c4e213aa1d00170a670e.mockapi.io/movies/${id}`)
			.then((data) => data.json())
			.then((mv) => {
				setName(mv.name)
				setRating(mv.rating)
				setPoster(mv.poster)
				setSummary(mv.summary)
				setTrailer(mv.trailer)
			})
	}, [id])

	const history = useHistory()
	const handleClick = (mov) => {
		fetch(`https://6166c4e213aa1d00170a670e.mockapi.io/movies/${id}`, {
			method: 'PUT',
			body: JSON.stringify(mov),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => history.push('/'))
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
					height: '4rem',
					padding: '0.5rem 0',
					maxWidth: '30rem',
				}}
			>
				<Button
					variant='contained'
					onClick={() => {
						handleClick({
							name,
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
