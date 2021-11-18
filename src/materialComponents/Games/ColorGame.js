import { useState, useReducer } from 'react'
import Button from '@mui/material/Button'

const ColorGame = () => {
	const [color, setColor] = useState('white')
	const [colors, setColors] = useState([])

	//Using useReducer hook
	const initialState = { bgcolor: '' }
	const reducer = (state, action) => {
		switch (action.type) {
			case 'setcolor':
				return { bgcolor: action.payload }
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<p className='gameHeading'>ColorGame</p>
			<div className='gameContainer'>
				<input
					className='inputField'
					onChange={(e) => {
						setColor(e.target.value)
					}}
					type='color'
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
				<input
					className='inputField'
					placeholder='color'
					value={state.bgcolor}
					onChange={(e) => {
						dispatch({ type: 'setcolor', payload: e.target.value })
					}}
					style={{ backgroundColor: state.bgcolor }}
				/>
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
