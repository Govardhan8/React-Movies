import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Button from '@mui/material/Button'

const ColorGame = () => {
	const [color, setColor] = useState('')
	const [colors, setColors] = useState([])
	return (
		<>
			<p className='gameHeading'>ColorGame</p>
			<div className='gameContainer'>
				<TextField
					className='inputField'
					id='standard-basic'
					label='Standard'
					variant='standard'
					sx={{
						fontSize: { xs: '1rem', lg: '1.5rem', xl: '2rem' },
					}}
					onChange={(e) => {
						setColor(e.target.value)
					}}
					value={color}
				/>
				<Button
					className='btn'
					variant='outlined'
					onClick={() => {
						setColor('')
						setColors([color, ...colors])
					}}
				>
					Add Color
				</Button>
			</div>
			<div className='colors'>
				{colors.map((c, i) => (
					<div
						key={i}
						style={{
							height: '5rem',
							width: '10rem',
							background: c,
							marginTop: '0.5rem',
							border: '1px solid darkgray',
						}}
					></div>
				))}
			</div>
		</>
	)
}

export default ColorGame
