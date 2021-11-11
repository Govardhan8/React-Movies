import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const Toggle = () => {
	return <List />
}
const List = () => {
	const { theme } = useContext(ThemeContext)
	return (
		<div
			style={{
				background: theme ? 'white' : 'black',
				width: '100%',
				height: '5rem',
			}}
		>
			<ListItems />
		</div>
	)
}
const ListItems = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	return (
		<div>
			<button
				style={{ background: !theme ? 'white' : 'black', color: 'grey' }}
				onClick={() => setTheme(true)}
			>
				light
			</button>
			<button
				style={{ background: !theme ? 'white' : 'black', color: 'grey' }}
				onClick={() => setTheme(false)}
			>
				dark
			</button>
		</div>
	)
}
export default Toggle
