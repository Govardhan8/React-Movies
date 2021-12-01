import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ContextWrapper } from './materialComponents/context/Theme'
// import InputForm from './materialComponents/InputForm'
import EditPage from './materialComponents/EditPage'
import TrailerPage from './materialComponents/TrailerPage'
import Navbar from './materialComponents/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import Movies from './materialComponents/Movies'
import Games from './materialComponents/Games/'
import BasicForm from './materialComponents/BasicForm'
import Footer from './materialComponents/Footer'

// export const Api_url='https://6166c4e213aa1d00170a670e.mockapi.io'
export const Api_url = 'https://movies-g.herokuapp.com'
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
							<BasicForm />
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
						<Route exact path='/Form'>
							<BasicForm />
						</Route>
					</Switch>
					<Footer />
				</ThemeProvider>
			</ContextWrapper>
		</Router>
	)
}
