import ColorGame from './ColorGame'
import TicTacToe from './TicTacToe'
import Paper from '@mui/material/Paper'
import './Games.css'
import { useState } from 'react'

const Games = () => {
	const [game, setGame] = useState('')
	const comp = () => {
		switch (game) {
			case 1:
				return <TicTacToe />

			case 2:
				return <ColorGame />

			default:
				break
		}
	}
	return (
		<Paper
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: '100vh',
				borderRadius: 0,
				paddingBottom: '0.5rem',
			}}
		>
			<h3 className='gameHeading'>Click the game you want to play:</h3>
			<button
				className='gameBtn'
				onClick={() => {
					setGame(1)
				}}
			>
				TicTacToe
			</button>
			<button
				className='gameBtn'
				onClick={() => {
					setGame(2)
				}}
			>
				Color Game
			</button>
			{comp()}
		</Paper>
	)
}

export default Games
