import React, { useContext, useState } from 'react'
import moviesData from './moviesData'

const ThemeContext = React.createContext()
const MovieContext = React.createContext()

export const useTheme = () => {
	return useContext(ThemeContext)
}
export const useMovies = () => {
	return useContext(MovieContext)
}
export const StyleComponent = () => {
	const { theme } = useTheme()
	const styles = {
		background: theme ? 'darkgray' : 'lightgray',
		color: theme ? 'whitesmoke' : 'black',
	}
	return styles
}
export const ContextWrapper = ({ children }) => {
	const [theme, setTheme] = useState(true)
	const [movies, setMovies] = useState(moviesData)
	const obj = { theme, setTheme }
	const obj1 = { movies, setMovies }
	return (
		<ThemeContext.Provider value={obj}>
			<MovieContext.Provider value={obj1}>{children}</MovieContext.Provider>
		</ThemeContext.Provider>
	)
}
