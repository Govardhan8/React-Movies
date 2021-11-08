import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import './inputForm.css'

const InputForm = ({ handleClick }) => {
	const [name, setName] = useState('')
	const [rating, setRating] = useState('')
	const [poster, setPoster] = useState('')
	const [summary, setSummary] = useState('')
	return (
		<div className='inputContainer'>
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
				Add Movie
			</Button>
		</div>
	)
}

export default InputForm
