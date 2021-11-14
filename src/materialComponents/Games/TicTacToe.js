import { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Box } from './Box'
import RefreshIcon from '@mui/icons-material/Refresh'

const TicTacToe = () => {
	const { width, height } = useWindowSize()
	const [gameBoard, setGameBoard] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	])
	const [isXTurn, setIsXTurn] = useState(true)
	const [values, setValues] = useState(['X', 'O'])
	const [start, setStart] = useState(false)

	const winnerSet = [
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
	const decideWinner = (game) => {
		for (let i = 0; i < winnerSet.length; i++) {
			const step = winnerSet[i]

			if (
				game[step[0]] !== null &&
				game[step[0]] === game[step[1]] &&
				game[step[1]] === game[step[2]]
			) {
				return game[step[0]]
			}
		}
		return null
	}
	let winner = decideWinner(gameBoard)
	const handleClick = (ind) => {
		const copyGame = [...gameBoard]
		console.log(!winner && !copyGame[ind])
		if (!winner && !copyGame[ind]) {
			setIsXTurn(!isXTurn)
			copyGame[ind] = isXTurn ? values[0] : values[1]
			setGameBoard([...copyGame])
			winner = decideWinner(copyGame)
		}
	}
	const restart = () => {
		winner = null
		setGameBoard([null, null, null, null, null, null, null, null, null])
	}
	return (
		<>
			<p className='gameHeading'>Tic tac toe</p>
			{!start && (
				<div className='start'>
					<p>Start with</p>
					<button
						onClick={() => {
							setStart(true)
						}}
					>
						X
					</button>
					<button
						onClick={() => {
							setValues(values.reverse())
							setStart(true)
						}}
					>
						O
					</button>
				</div>
			)}
			{start && (
				<>
					<p className='turn'>
						{winner ? (
							<h2>Winner is : {winner}</h2>
						) : isXTurn ? (
							values[0] + "'s Turn"
						) : (
							values[1] + "'s Turn"
						)}
						<span
							className='restart'
							onClick={() => {
								restart()
							}}
						>
							<RefreshIcon sx={{ fontSize: { sm: '1.5rem', md: '2rem' } }} />{' '}
							Restart
						</span>
					</p>
					<div className='gameBoard'>
						{gameBoard.map((game, i) => (
							<Box key={i} index={i} val={game} handleClick={handleClick} />
						))}
					</div>
				</>
			)}
			{winner && (
				<Confetti
					width={width - 50}
					height={height}
					numberOfPieces={500}
					gravity={0.15}
				/>
			)}
		</>
	)
}
export default TicTacToe
