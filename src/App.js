import './App.css'
import Movies from './components/Movies'
import { ContextWrapper } from './components/context/Theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import InputForm from './components/InputForm'
import EditPage from './components/EditPage'
import TrailerPage from './components/TrailerPage'

export default function App() {
	return (
		<Router>
			<ContextWrapper>
				<NavBar />
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
				</Switch>
			</ContextWrapper>
		</Router>
	)
}
