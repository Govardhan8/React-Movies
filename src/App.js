import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ContextWrapper } from './materialComponents/context/Theme'
import InputForm from './materialComponents/InputForm'
import EditPage from './materialComponents/EditPage'
import TrailerPage from './materialComponents/TrailerPage'
import Navbar from './materialComponents/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import Movies from './materialComponents/Movies'
import Games from './materialComponents/Games/'

export default function App() {
	const [mode, setMode] = useState('light')
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	})
	return (
		<Router>
			<ContextWrapper>
				<ThemeProvider theme={darkTheme}>
					<Navbar mode={mode} setMode={setMode} />
					<Switch>
						<Route exact path='/'>
							<Movies />
						</Route>
						<Route exact path='/add'>
							<InputForm />
						</Route>
						<Route exact path='/edit/:id'>
							<EditPage />
						</Route>
						<Route exact path='/trailer/:id'>
							<TrailerPage />
						</Route>
						<Route exact path='/Games'>
							<Games />
						</Route>
					</Switch>
				</ThemeProvider>
			</ContextWrapper>
		</Router>
	)
}
