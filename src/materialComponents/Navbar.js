import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Toolbar from '@mui/material/Toolbar'
import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import { useHistory } from 'react-router-dom'

const Navbar = ({ mode, setMode }) => {
	const history = useHistory()
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='open drawer'
							sx={{ mr: 2 }}
							onClick={() => {
								history.push('/')
							}}
						>
							<HomeIcon />
						</IconButton>
						<Typography variant='h6' noWrap component='div'>
							MOVIES
						</Typography>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='open drawer'
							sx={{ ml: 'auto' }}
							onClick={() => {
								history.push('/add')
							}}
						>
							<AddIcon />
						</IconButton>
						<IconButton
							sx={{ ml: 1 }}
							onClick={() => {
								setMode(mode === 'dark' ? 'light' : 'dark')
							}}
							color='inherit'
						>
							{mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}

export default Navbar
