import { useState } from 'react'
import { useTheme } from './context/Theme'
import NestedList from './NestedList'
import Switch from '@mui/material/Switch'
import MenuIcon from '@mui/icons-material/Menu'
import './navbar.css'
import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const { theme, setTheme } = useTheme()
	const [menu, setMenu] = useState(false)
	const styles = {
		borderBottom: '1px solid whitesmoke',
		background: theme ? 'lightgray' : '#0a1929',
		color: theme ? 'black' : 'whitesmoke',
	}
	const displayMenu = () => {
		setMenu(!menu)
	}
	return (
		<>
			<nav className='navbar' style={styles}>
				<MenuIcon fontSize='large' className='menu' onClick={displayMenu} />

				<Link className='link' to='/'>
					<h1 className='header'>
						<HomeIcon className='icon' fontSize='large' />
						Avengers
					</h1>
				</Link>
				<Link className='link' to='/add'>
					<AddIcon className='icon' fontSize='large' />
				</Link>
				<Switch
					className='toggle'
					label='darktheme'
					onClick={() => {
						setTheme(!theme)
					}}
				/>
			</nav>
			{menu && <NestedList style={styles} menu={displayMenu} />}
		</>
	)
}

export default NavBar
