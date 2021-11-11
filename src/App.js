import './App.css'
import Movies from './components/Movies'
import { ContextWrapper } from './components/context/Theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import InputForm from './components/InputForm'
import EditPage from './components/EditPage'

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
					<Route path='/edit/:name'>
						<EditPage />
					</Route>
				</Switch>
			</ContextWrapper>
		</Router>
	)
}
